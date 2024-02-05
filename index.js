import { createInterface } from 'readline'
import { parseUsername, Messages } from './src/utils/index.js'

const username = parseUsername()

Messages.greeting(username)

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
})
