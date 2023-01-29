import type { Logger } from 'pino'
import type { CommandBuilder } from 'yargs'

export type Command = string

export type Builder = CommandBuilder

export type Handler<Options = Record<string, never>> = (
  args: Context & Options
) => void | Promise<void>

interface Context {
  logger: Logger
}
