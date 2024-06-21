import TelegramBot from 'node-telegram-bot-api';
import { USER_IDS } from 'lib/constants';

/**
 *
 * This function checks if a user is a specific person
 *
 * @example
 * bot.onText(regex, message => {
 *   is(message.from, USER_IDS.grech) // true if the sender is Mikhail Grechka
 * })
 */
export const is = (user: TelegramBot.User, name: keyof typeof USER_IDS) => {
  return !user.is_bot && user.id === USER_IDS[name]
}
