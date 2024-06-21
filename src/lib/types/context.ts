import TelegramBot from "node-telegram-bot-api"

export type Context = {
  chatId: number
  bot: TelegramBot
}
