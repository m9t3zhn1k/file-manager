import { Messages } from '#utils'

export class CommandHandler {
  static handle(command, ...args) {
    switch (command) {
      case 'up': {
        if (args.length) {
          Messages.invalidInput()
          return
        }
        console.log('up')
      }
    }
  }
}
