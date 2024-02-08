import { add, cat, cd, compress, cp, decompress, hash, ls, mv, os, rm, rn, up } from '#commands'
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
      case 'rm': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [path] = args
        await rm(path)
        break
      }
      case 'os': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [param] = args
        await os(param)
        break
      }
      case 'hash': {
        if (onlyArgumentValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [path] = args
        await hash(path)
        break
      }
      case 'compress': {
        if (twoArgumentsValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [source, destination] = args
        await compress(source, destination)
        break
      }
      case 'decompress': {
        if (twoArgumentsValidator(args)) {
          Messages.invalidInput()
          return
        }
        const [source, destination] = args
        await decompress(source, destination)
        break
      }
      default:
        Messages.operationFailed()
    }
  }
}
