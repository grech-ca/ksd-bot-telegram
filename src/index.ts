import TelegramBot from 'node-telegram-bot-api'
import { CHAT_IDS } from 'lib/constants'
import { addModules } from 'lib/helpers'
import { WhoCommand, UrgentCommand } from 'modules/CommandModule/commands'
import { LoggerModule } from 'modules/LoggerModule'
import { HeyHuinaModule } from 'modules/HeyHuinaModule'
import { PolinaVoiceMessageModule } from 'modules/PolinaVoiceMessageModule'
import { CommandModule } from 'modules/CommandModule'
import { ReplyModule } from 'modules/ReplyModule'
import { RandomPhraseModule } from 'modules/RandomPhraseModule'
import { PhotoReplyModule } from 'modules/PhotoReplyModule'
import { WakeUpModule } from 'modules/WakeUpModule'

const { API_TOKEN } = process.env

const bot = new TelegramBot(API_TOKEN, { polling: true })

const chatId = CHAT_IDS.ksd

addModules([
  LoggerModule,
  HeyHuinaModule,
  PolinaVoiceMessageModule,
  CommandModule({
    commands: [
      WhoCommand,
      UrgentCommand,
    ]
  }),
  ReplyModule,
  RandomPhraseModule,
  PhotoReplyModule,
  WakeUpModule,
], { bot, chatId })
