export const getUsername = () =>
  process.argv
    .slice(2)
    .find(arg => arg.includes('--username'))
    ?.split('=')[1]
