import { Context, Module } from 'lib/types'
import TelegramBot from 'node-telegram-bot-api'

/**
 *
 * This function adds all modules to the bot
 */
export const addModules = (bot: TelegramBot, modules: Module[], context: Context) => modules.forEach(module => module(bot, context))
