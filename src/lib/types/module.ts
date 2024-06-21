import TelegramBot from 'node-telegram-bot-api'
import { Context } from './context'

/**
 * 
 * Module is a function that incapsulates a part of a bot's behaviour
 *
 * @param bot A bot instance 
 * @param context A common data that is used across the app
 */
export type Module = (bot: TelegramBot, context: Context) => void
