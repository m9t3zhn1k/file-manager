import { state } from '#index'
import { Messages } from '#utils'
import { createHash } from 'crypto'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function hash(path) {
  try {
    const source = join(state.directory, path)
    const file = await readFile(source)
    const hash = createHash('sha256').update(file).digest('hex')

    console.log(hash)
  } catch {
    Messages.operationFailed()
  }
}
