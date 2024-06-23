import { isIrrelevant } from "lib/helpers";
import { Module } from "lib/types";

/**
 *
 * This module simply logs all the messages that users send
 */
export const LoggerModule: Module = ({ bot }) => {
  bot.on('message', (...params) => {
    if (isIrrelevant(params[0].date)) return
    console.log(...params)
  })
}
