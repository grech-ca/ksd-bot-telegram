import path from 'path'
import TelegramBot from "node-telegram-bot-api"
import { delay } from './delay'

/**
 *
 * This function sends a speech about the ~~doom slayer~~ чмоня and
 * then sends a ~~doom slayer~~ чмоня picture along with the doom theme
 */
export const doomSpeech = async (chatId: string, bot: TelegramBot) => {
  const rows = [
    'In the first age, in the first battle, when the shadows first lengthened, one stood.',
    'He chose the path of perpetual torment.',
    'In his ravenous hatred he found no peace, and with boiling blood he scoured the umbral plains,',
    'seeking vengence afgainst the dark lords who had robbed him.',
    'And those that tasted the bite of his sword named him...',
    'Чмоня.'
  ]

  for (const row of rows) {
    await delay(800)
    await bot.sendMessage(chatId, row)
  }

  await bot.sendPhoto(chatId, path.join(process.cwd(), 'assets/images/doom_chmonya.jpg'))
  await bot.sendAudio(chatId, path.join(process.cwd(), 'assets/audio/doom_theme.mp3'))
}
