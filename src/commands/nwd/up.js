import { state } from '#index'
import { Messages } from '#utils'
import { parse, resolve } from 'path'

export async function up() {
  const isRootDirectory = parse(state.directory).root === state.directory
  const upperDirectory = resolve(state.directory, '..')

  if (!isRootDirectory) {
    state.directory = upperDirectory
  }

  Messages.currentDirectory(state.directory)
}
