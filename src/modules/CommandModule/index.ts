import { Module } from "lib/types";
import { Command, CommandContext, Commands } from "./types";
import { HelpCommand } from "./commands";

export type CommandModuleParams = {
  commands: Command[]
}

/**
 * This module invokes a specific command coming after a slash in a message
 */
export const CommandModule = ({ commands: commandsList }: CommandModuleParams): Module => (ctx) => {
  const { bot, chatId } = ctx

  const commands: Commands = {
    ...Object.fromEntries(commandsList.map(command => [command.name, command])),
    help: HelpCommand,
  }

  bot.onText(/^\/.*/, async (message) => {
    const { text } = message
    if (!text) return

    const [commandName, ...params] = text.slice(1).split(' ')

    const command = commands[commandName]

    const commandContext: CommandContext = { ...ctx, message, commands }

    if (command) {
      command.callback(commandContext, ...params)
    } else {
      await bot.sendMessage(chatId, 'Такой команды нет')
      commands.help.callback(commandContext, ...params)
    }

  })
}
