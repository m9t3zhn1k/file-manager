import { state } from '#index'
import { Messages } from '#utils'
import { rename } from 'fs/promises'
import { join } from 'path'

export async function rn(file, newFile) {
  const path = join(state.directory, file)
  const newPath = join(state.directory, newFile)

  console.log(path, newPath)

  try {
    await rename(path, newPath)
    Messages.currentDirectory(state.directory)
  } catch (error) {
    Messages.operationFailed()
  }
}
