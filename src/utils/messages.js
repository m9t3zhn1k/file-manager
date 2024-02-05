export class MessagesController {
  static greeting(username) {
    console.log(`Welcome to the File Manager, ${username}!`)
  }

  static goodbye(username) {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
  }

  static currentDirectory(path) {
    console.log(`You are currently in ${path}`)
  }

  static invalidInput() {
    console.log(`Invalid input`)
  }

  static operationFailed() {
    console.log(`Operation failed`)
  }
}