import { CommandHandler } from '#command-handler'
import { State } from '#state'
import { Messages } from '#utils'
import { createInterface } from 'readline'

export const state = new State()

Messages.greeting(state.username)
Messages.currentDirectory(state.directory)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('close', () => Messages.goodbye(state.username))

rl.on('line', input => {
  if (input === '.exit') {
    rl.close()
    return
  }
  CommandHandler.handle(input)
})
