import { state } from '#index'
import { Messages } from '#utils'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { cp as copy } from './copy.js'

export async function mv(file, directory) {
  const source = join(state.directory, file)

  try {
    await copy(file, directory)
    await unlink(source)
    Messages.currentDirectory(state.directory)
  } catch (err) {
    Messages.operationFailed()
  }
}
