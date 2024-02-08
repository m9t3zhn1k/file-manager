import { Messages } from '#utils'
import { EOL, arch, cpus, homedir, userInfo } from 'os'

export function os(param) {
  switch (param) {
    case '--EOL':
      console.log(JSON.stringify(EOL))
      break
    case '--cpus':
      const data = cpus()
      console.log('Amount of CPUS equels to', data.length)
      data.forEach((item, index) =>
        console.log(
          `#${++index}`,
          'model:',
          item.model,
          'clock rate:',
          String(item.speed / 1000),
          'GHz',
        ),
      )
      break
    case '--homedir':
      console.log(homedir())
      break
    case '--username':
      console.log(userInfo().username)
      break
    case '--architecture':
      console.log(arch())
      break
    default:
      Messages.invalidInput()
      break
  }
}
