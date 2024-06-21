import { Command } from "modules/CommandModule/types";

export const HelpCommand: Command = {
  name: 'help',
  description: 'Показывает список всех команд',
  callback: ({ bot, chatId, commands }) => {
    const commandsList = Object.values(commands)
    const commandDescriptions = commandsList.map(({ name, description }) => `/${name} — ${description}`)

    bot.sendMessage(chatId, `Список команд:\n\n${commandDescriptions.join('\n')}`)
  }
}
