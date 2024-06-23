import { Module } from "lib/types";
import { Command, CommandContext, Commands } from "./types";
import { HelpCommand } from "./commands";
import { chance, isIrrelevant, random } from "lib/helpers";
import { messages } from "./messages";

export type CommandModuleParams = {
  commands: Command[]
}

const DISABLED_RESPONSE_CHANCE = 10

/**
 *
 * This module invokes a specific command coming after a slash in a message
 */
export const CommandModule = ({ commands: commandsList }: CommandModuleParams): Module => (ctx) => {
  const { bot, chatId } = ctx

  const coreCommands = [HelpCommand]

  const allCommands = [
    ...coreCommands,
    ...commandsList,
  ].sort(({ isEnabled }) => isEnabled ? 0 : 1)

  const commands: Commands = {
    help: HelpCommand,
    ...Object.fromEntries(allCommands.map(command => [command.triggers[0], command])),
  }

  const commandTriggers: Record<string, Command> = {
    ...Object.fromEntries(allCommands.flatMap(command => command.triggers.map(trigger => [trigger, command]))),
  }

  bot.onText(/^\/.*/, async (message) => {
    const { text, date } = message
    if (!text || isIrrelevant(date)) return

    const [commandName, ...args] = text.slice(1).split(' ')

    const command = commandTriggers[commandName]

    const commandContext: CommandContext = { ...ctx, message, commands }

    if (command) {
      if (command.isEnabled) {
        command.callback(commandContext, ...args)
      } else {
        await bot.sendMessage(chatId, `❌ Команда "/${commandName}" временно не доступна.`)

        if (chance(DISABLED_RESPONSE_CHANCE)) await bot.sendMessage(chatId, random(messages.disabled))
      }
    } else {
      await bot.sendMessage(chatId, 'Такой команды нет')
      commands.help.callback(commandContext, ...args)
    }
  })
}
