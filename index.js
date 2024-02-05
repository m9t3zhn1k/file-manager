import { createInterface } from 'readline'
import { parseUsername, MessagesController, Directory } from './src/utils/index.js'

const username = parseUsername()
const directory = new Directory()

MessagesController.greeting(username)
MessagesController.currentDirectory(directory.path)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('close', () => MessagesController.goodbye(username))

rl.on('line', (input) => {
  if (input === '.exit') {
    rl.close()
  }
})
