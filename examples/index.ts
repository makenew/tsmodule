#!/usr/bin/env tsx

import process from 'node:process'

import { pino } from 'pino'
import yargs, { type MiddlewareFunction } from 'yargs'

import * as todo from './todo.js'

const commands = [todo]

const createLogger: MiddlewareFunction = (argv) => {
  argv['logger'] = pino({
    transport: {
      target: 'pino-pretty'
    }
  })
}

const middleware = [createLogger]

// UPSTREAM: https://github.com/yargs/yargs/issues/1005
const availableCommands = `
Available commands:
  ${commands.map(({ command }) => command).join('\n  ')}
`

await yargs(process.argv.slice(2))
  .middleware(middleware)
  // @ts-expect-error UPSTREAM: https://github.com/yargs/yargs/issues/2211
  .command(commands)
  .demandCommand(1, 1, availableCommands.trim())
  .recommendCommands()
  .strict()
  .parse()
