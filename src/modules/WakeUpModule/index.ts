import { Module } from 'lib/types'

/**
 *
 * This module is intended for actions that should be performed once the bot is started
 */
export const WakeUpModule: Module = ({ bot, chatId }) => {
  return bot.sendMessage(chatId, 'пока чмоня спал, его код переписали')
}
