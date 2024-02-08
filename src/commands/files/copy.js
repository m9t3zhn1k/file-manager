import { state } from '#index'
import { Messages } from '#utils'
import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'

export async function cp(file, directory) {
  const source = join(state.directory, file)
  const destination = join(state.directory, directory)
  const readableStream = createReadStream(source)
  const writableStream = createWriteStream(destination)

  try {
    readableStream.pipe(writableStream)
    Messages.currentDirectory(state.directory)
  } catch (err) {
    console.log(err)
    Messages.operationFailed()
  }
}
