import process from 'node:process'

export default () => {
  // UPSTREAM: https://nodejs.org/docs/latest-v18.x/api/esm.html#loaders
  process.env.NODE_NO_WARNINGS = '1'

  return {
    ignoredByWatcher: ['tmp/**/*'],
    files: ['**/*.spec.ts', '!package/**/*'],
    extensions: {
      ts: 'module'
    },
    nodeArguments: ['--loader=tsx']
  }
}
