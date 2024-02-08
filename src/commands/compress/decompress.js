import { state } from '#index'
import { Messages } from '#utils'
import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'
import { createBrotliDecompress } from 'zlib'

export async function decompress(source, destination) {
  try {
    const sourcePath = join(state.directory, source)
    const destinationPath = join(state.directory, destination)
    const readStream = createReadStream(sourcePath)
    const writeStream = createWriteStream(destinationPath)
    const brotli = createBrotliDecompress()

    readStream.pipe(brotli).pipe(writeStream)
  } catch {
    Messages.operationFailed()
  }
}
