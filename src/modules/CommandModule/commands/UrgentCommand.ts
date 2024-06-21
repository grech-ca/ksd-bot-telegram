import { delay } from "lib/helpers";
import { Command } from "modules/CommandModule/types";

export const UrgentComand: Command = {
  name: 'срочно',
  description: 'Начинает спамить упоминаниями определенного пользователя',
  callback: async ({ message, chatId, bot }) => {
    const mentions = message.entities?.filter(({ type }) => type === 'mention') ?? []
    const replyTo = message.reply_to_message?.from

    if (mentions.length > 1) {
      await bot.sendMessage(chatId, 'Этой командой можно вызывать только одного пользователя за раз', {
        reply_to_message_id: message.message_id,
      })
      return
    }

    const mention = mentions[0]

    if (!mention && !replyTo) {
      await bot.sendMessage(chatId, 'Чтобы вызвать пользователя, либо ответьте на его сообщение, либо упомяните его', {
        reply_to_message_id: message.message_id,
      })
    }

    let mentionText = ''

    if (mention) {
      mentionText = message.text!.match(/@\w+/ig)?.[0] ?? ''
    } else if (replyTo) {
      mentionText = `@${replyTo.username}`
    }

    if (!mentionText) return

    try {
      for (let i = 0; i < 10; i++) {
        await delay(500)
        await bot.sendMessage(chatId, mentionText)
      }
    } catch {
      await delay(1000)
      await bot.sendMessage(chatId, 'Бля Павел Дуров мне лично пиздов вставил за столько сообщений, я папожи смогу писать')
    }
  }
}
