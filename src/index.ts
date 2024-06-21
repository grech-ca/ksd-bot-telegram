import TelegramBot from 'node-telegram-bot-api'
import { CHAT_IDS } from 'lib/constants'
import { addModules } from 'lib/helpers'
import { PolinaVoiceMessage, HeyHuina, Logger } from 'modules'

const { API_TOKEN } = process.env

async function main() {
  const bot = new TelegramBot(API_TOKEN, { polling: true })

  const chatId = CHAT_IDS.ksd

  addModules(bot, [
    Logger,
    HeyHuina,
    PolinaVoiceMessage,
  ], { chatId })
}

main()
