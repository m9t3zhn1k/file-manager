import { Messages } from '#utils'

export const noArgumentValidator = args => (args.length ? Messages.invalidInput() : null)
