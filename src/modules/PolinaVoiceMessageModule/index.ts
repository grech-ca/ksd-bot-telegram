import { is, random } from "lib/helpers";
import { Module } from "lib/types";
import { responses } from './messages'

/**
 * 
 * This module checks whether Polina Gagarina recorded a
 * too long voice message to let her know about this.
 */
export const PolinaVoiceMessageModule: Module = ({ bot, chatId }) => {
  bot.on('message', message => {
    if (!message.from || !message.voice) return

    if (is(message.from, 'polina') && message.voice.duration > 120) {
      bot.sendMessage(chatId, random(responses)!, {
        reply_to_message_id: message.message_id,
      })
    }
  })
}
