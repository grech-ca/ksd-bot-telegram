import { chance, random } from "lib/helpers";
import { Module } from "lib/types";
import { messages } from "./messages";

const PHOTO_RESPONSE_CHANCE = 100

/*
 *
 * This module sends a random response once someone sends a photo in the chat
 * with a chance of PHOTO_RESPONSE_CHANCE
 */
export const PhotoReplyModule: Module = ({ bot, chatId }) => {
  bot.on('message', (_message, { type }) => {
    if (type === 'photo' && chance(PHOTO_RESPONSE_CHANCE)) {
      bot.sendMessage(chatId, random(messages))
    }
  })
}
