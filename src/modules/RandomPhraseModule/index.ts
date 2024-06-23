import { chance, random } from "lib/helpers";
import { Module } from "lib/types";
import { messages } from "./messages";

const RANDOM_RESPONSE_CHANCE = 20

/**
 *
 * This module sends a random message with a RANDOME_RESPONSE_CHANCE
 * chance once someone sends a messsage in the chat
 */
export const RandomPhraseModule: Module = ({ bot, chatId }) => {
  bot.on('message', (_message, { type }) => {
    if (type === 'text' && chance(RANDOM_RESPONSE_CHANCE)) {
      bot.sendMessage(chatId, random(messages))
    }
  })
}
