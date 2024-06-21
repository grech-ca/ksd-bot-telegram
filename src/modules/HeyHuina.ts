import { random } from 'lib/helpers';
import { Module } from 'lib/types';

/**
 * 
 * This module checks whether somebody said "эй хуйня" in a
 * chat and calls them "хуйня" back until they stop doing this.
 *
 * If user admits that they are "хуйня", the bot will agree.
 */
export const HeyHuina: Module = (bot, { chatId }) => {
  let lastInsultId: number | null = null

  bot.onText(/^эй хуйня/ig, (msg) => {
    bot.sendMessage(chatId, 'сам хуйня', {
      reply_to_message_id: msg.message_id
    })

    lastInsultId = msg.message_id
  })

  bot.onText(/^(сам)|(нет ?ты) хуйня/ig, (msg) => {
    if (!lastInsultId || msg.message_id - lastInsultId > 3) return

    bot.sendMessage(chatId, 'нет ты хуйня', {
      reply_to_message_id: msg.message_id
    })

    lastInsultId = msg.message_id
  })

  bot.onText(/^(ладно)|(лан)|(хорошо)|(лады)|(ок(и|ей)?)( я (хуйня)?)?/ig, (msg) => {
    if (!lastInsultId || msg.message_id - lastInsultId > 3) return

    const message = random([
      'то-то же',
      'ага',
      'правильно',
      'тру',
      'соглы',
      'согласен',
      'вот так-то',
      'выкуси',
    ])!

    bot.sendMessage(chatId, message, {
      reply_to_message_id: msg.message_id
    })

    lastInsultId = null
  })
}
