import { Context, Module } from 'lib/types'

/**
 *
 * This function adds all modules to the bot
 */
export const addModules = (modules: Module[], context: Context) => modules.forEach(module => module(context))
