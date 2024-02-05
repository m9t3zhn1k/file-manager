import { Messages } from "../utils/messages.js"

export class CommandHandler {
  static handle(command, ...args) {
    switch(command) {
      case 'up': {
        if (args.length) {
          Messages.invalidInput()
          return
        }
        
      }
    }
  }
}