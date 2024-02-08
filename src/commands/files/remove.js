import { state } from '#index'
import { Messages } from '#utils'
import { unlink } from 'fs/promises'
import { join } from 'path'

export async function rm(path) {
  const source = join(state.directory, path)

  try {
    await unlink(source)
    Messages.currentDirectory(state.directory)
  } catch (err) {
    Messages.operationFailed()
  }
}
