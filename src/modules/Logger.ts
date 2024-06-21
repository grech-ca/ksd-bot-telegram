import { Module } from "lib/types";

/**
 *
 * This module simply logs all the messages that users send
 */
export const Logger: Module = (bot) => {
  bot.on('message', console.log)
}
