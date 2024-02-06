import { createInterface } from 'readline'
import { getUsername, Messages } from '#utils'
import { homedir } from 'os'
import { CommandHandler } from './src/command-handler/index.js'

const username = getUsername()
const path = homedir()

Messages.greeting(username)
Messages.currentDirectory(path)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('close', () => Messages.goodbye(username))

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close()
  }
  CommandHandler.handle(input)
})
