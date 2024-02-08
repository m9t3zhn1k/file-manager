import { add, cat, cd, cp, ls, mv, rn, up } from '#commands'
import { Messages } from '#utils'
import { noArgumentValidator, onlyArgumentValidator, twoArgumentsValidator } from '#validators'

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
      case 'cat': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const arg = args[0]
        await cat(arg)
        break
      }
      case 'add': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const arg = args[0]
        await add(arg)
        break
      }
      case 'rn': {
        if (twoArgumentsValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [file, newName] = args
        await rn(file, newName)
        break
      }
      case 'cp': {
        if (twoArgumentsValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [file, newName] = args
        await cp(file, newName)
        break
      }
      case 'mv': {
        if (twoArgumentsValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [file, newName] = args
        await mv(file, newName)
        break
      }
      default:
        Messages.operationFailed()
    }
  }
}
