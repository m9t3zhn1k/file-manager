import { state } from '#index'
import { Messages } from '#utils'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function add(name) {
  const path = join(state.directory, name)
  try {
    await writeFile(path, '')
    Messages.currentDirectory(state.directory)
  } catch {
    Messages.operationFailed()
  }
}
