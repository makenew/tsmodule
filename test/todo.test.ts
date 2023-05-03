import test from 'ava'

import { todo } from '@makenew/tsmodule'

test('todo: returns argument', (t) => {
  t.is(todo('todo'), 'todo', 'returns input')
})
