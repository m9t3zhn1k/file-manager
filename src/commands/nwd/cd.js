import { state } from '#index'
import { Messages } from '#utils'
import { stat } from 'fs/promises'
import { resolve } from 'path'

export async function cd(path) {
  const newDirectory = resolve(state.directory, path)
  const stats = await stat(newDirectory).catch(() => Messages.operationFailed())
  const isDirectory = stats?.isDirectory()

  if (isDirectory) {
    state.directory = newDirectory
  }

  Messages.currentDirectory(state.directory)
}
