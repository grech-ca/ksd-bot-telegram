import { Module } from 'lib/types'

export const WakeUpModule: Module = ({ bot, chatId }) => {
  return bot.sendMessage(chatId, 'пока чмоня спал, его код переписали')
}
