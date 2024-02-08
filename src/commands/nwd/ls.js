import { state } from '#index'
import { Messages } from '#utils'
import { readdir } from 'fs/promises'

export async function ls() {
  const directory = state.directory

  try {
    const data = await readdir(directory, {
      withFileTypes: true,
    })
    const directories = data
      .filter(item => item.isDirectory())
      .sort((first, second) => first.name.localeCompare(second.name))
      .map(directory => ({ name: directory.name, type: 'directory' }))
    const files = data
      .filter(item => item.isFile())
      .sort((first, second) => first.name.localeCompare(second.name))
      .map(file => ({ name: file.name, type: 'file' }))

    console.table([...directories, ...files], ['name', 'type'])
    Messages.currentDirectory(state.directory)
  } catch {
    Messages.operationFailed()
  }
}
