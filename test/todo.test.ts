import { strictEqual } from 'node:assert'
import test from 'node:test'

import { todo } from '@makenew/tsmodule'

await test('todo: returns argument', () => {
  strictEqual(todo('todo'), 'todo', 'returns input')
})
