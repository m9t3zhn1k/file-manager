import { up } from '#commands'
import { Messages } from '#utils'
import { noArgumentValidator } from '#validators'

export class CommandHandler {
  static async handle(command, ...args) {
    switch (command) {
      case 'up': {
        if (noArgumentValidator(args)) {
          return
        }
        await up()
        break
      }
      default:
        Messages.operationFailed()
    }
  }
}
