import { USER_IDS } from "lib/constants";
import { random } from "lib/helpers";
import { Command } from "modules/CommandModule/types";

export const WhoCommand: Command = {
  triggers: ['кто', 'who'],
  description: 'Выбирает одного из пользователей',
  callback: async ({ chatId, bot }, ...args) => {
    const userIds = Object.values(USER_IDS)

    const user = await bot.getChatMember(chatId, random(userIds))

    if (!user) return

    bot.sendMessage(chatId, `@${user.user.username} ${args.join(' ')}`)
  }
}
