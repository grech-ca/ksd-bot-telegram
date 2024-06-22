import TelegramBot from 'node-telegram-bot-api'
import { CHAT_IDS } from 'lib/constants'
import { addModules } from 'lib/helpers'
import { PolinaVoiceMessageModule, HeyHuinaModule, LoggerModule, CommandModule, WakeUpModule } from 'modules'
import { WhoCommand, UrgentCommand } from 'modules/CommandModule/commands'

const { API_TOKEN } = process.env

const bot = new TelegramBot(API_TOKEN, { polling: true })

const chatId = CHAT_IDS.ksd

addModules([
  // WakeUpModule,
  LoggerModule,
  HeyHuinaModule,
  PolinaVoiceMessageModule,
  CommandModule({
    commands: [
      WhoCommand,
      UrgentCommand,
    ]
  }),
], { bot, chatId })
