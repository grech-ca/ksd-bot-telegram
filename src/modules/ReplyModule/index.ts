import { chance, random } from 'lib/helpers'
import { Module } from 'lib/types'
import { messages } from './messages'

export const ReplyModule: Module = ({ bot, chatId }) => {
  bot.on('message', (message, { type }) => {
    if (type === 'text' && chance(20)) {
      bot.sendMessage(chatId, random([...messages.random]))
    }

    if (type === 'photo' && chance(100)) {
      bot.sendMessage(chatId, random([...messages.photoRandom]))
    }
  })
}
