import { Command } from "modules/CommandModule/types";

export const HelpCommand: Command = {
  triggers: ['help', 'commands', 'хелп', 'команды'],
  description: 'Показывает список всех команд',
  callback: ({ bot, chatId, commands }) => {
    const commandsList = Object.values(commands)
    const commandDescriptions = commandsList.map(({ triggers, description }) => {
      const [variant, ...restVariants] = triggers.map(trigger => `/${trigger}`)

      return `${variant} ${restVariants.length > 1 ? `(или ${restVariants.join(' ')})` : ''} — ${description}`
    })

    bot.sendMessage(chatId, `Список команд:\n\n${commandDescriptions.join('\n')}`)
  }
}
