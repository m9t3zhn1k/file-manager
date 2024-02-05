import { createInterface } from 'readline'
import { parseUsername, Messages, Directory } from './src/utils/index.js'

const username = parseUsername()
const directory = new Directory()

Messages.greeting(username)
Messages.currentDirectory(directory.path)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('close', () => Messages.goodbye(username))
