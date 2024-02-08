import { state } from '#index'
import { Messages } from '#utils'
import { createReadStream } from 'fs'
import { join } from 'path'

export async function cat(file) {
  try {
    const path = join(state.directory, file)
    const stream = createReadStream(path, {
      encoding: 'utf8',
    })
    stream.on('data', console.log)
    Messages.currentDirectory(state.directory)
  } catch (error) {
    Messages.operationFailed()
  }
}
