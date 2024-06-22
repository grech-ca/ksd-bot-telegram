import { Command } from "modules/CommandModule/types";

export const HelpCommand: Command = {
  isEnabled: true,

  triggers: ['help', 'commands', 'хелп', 'команды'],
  description: 'Показывает список всех команд',
  callback: ({ bot, chatId, commands }) => {
    const commandsList = Object.values(commands)
    const commandDescriptions = commandsList.map(({ isEnabled, triggers, description }) => {
      const [variant, ...restVariants] = triggers.map(trigger => `/${trigger}`)

      const disabledNote = isEnabled ? '' : '❌ [отключена]'

      return `${disabledNote} ${variant} ${restVariants.length > 1 ? `(или ${restVariants.join(' ')})` : ''} — ${description}`
    })

    bot.sendMessage(chatId, `Список команд:\n\n${commandDescriptions.join('\n\n')}`)
  }
}
