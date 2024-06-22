import { Module } from "lib/types";
import { Command, CommandContext, Commands } from "./types";
import { HelpCommand } from "./commands";

export type CommandModuleParams = {
  commands: Command[]
}

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
  ]

  const commands: Commands = {
    help: HelpCommand,
    ...Object.fromEntries(allCommands.map(command => [command.triggers[0], command])),
  }

  const commandTriggers: Record<string, Command> = {
    ...Object.fromEntries(allCommands.flatMap(command => command.triggers.map(trigger => [trigger, command]))),
  }

  bot.onText(/^\/.*/, async (message) => {
    const { text } = message
    if (!text) return

    const [commandName, ...args] = text.slice(1).split(' ')

    const command = commandTriggers[commandName]

    const commandContext: CommandContext = { ...ctx, message, commands }

    if (command) {
      command.callback(commandContext, ...args)
    } else {
      await bot.sendMessage(chatId, 'Такой команды нет')
      commands.help.callback(commandContext, ...args)
    }
  })
}
