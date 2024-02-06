import { getUsername } from '#utils'
import { homedir } from 'os'

export class State {
  #username = getUsername()
  #directory = homedir()

  get username() {
    return this.#username
  }

  get directory() {
    return this.#directory
  }

  set directory(path) {
    this.#directory = path
  }
}
