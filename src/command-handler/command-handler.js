import { cd, ls, up } from '#commands'
import { Messages } from '#utils'
import { noArgumentValidator, onlyArgumentValidator } from '#validators'

export class CommandHandler {
  static async handle(command, args) {
    switch (command) {
      case 'up': {
        if (noArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        await up()
        break
      }
      case 'cd': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const arg = args[0]
        await cd(arg)
        break
      }
      case 'ls': {
        if (noArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        await ls()
        break
      }
      default:
        Messages.operationFailed()
    }
  }
}
