import { homedir } from 'os'

export class Directory {
  path = homedir()

  refresh() {
    this.path = homedir()
  }
}