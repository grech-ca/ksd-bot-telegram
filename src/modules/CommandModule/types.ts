import { Context } from "lib/types"
import { Message } from "node-telegram-bot-api"

export type CommandContext = Context & {
  message: Message
  commands: Commands
}

export type Command = {
  name: string
  description: string
  callback: (context: CommandContext, ...args: string[]) => void | Promise<void>
}

export type Commands = {
  help: Command
  [name: string]: Command
}
