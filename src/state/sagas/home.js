
import {delay} from 'redux-saga'
import {call, fork, put} from 'redux-saga/effects'

import {addMessage} from 'actions'

const sagaOneMessage = value => addMessage({
  key: 'sagaOne',
  value
})

const sagaTwoMessage = addMessage({
  key: 'sagaTwo',
  value: 'Saga two message'
})

const autoRestart = (generator, handleError) => {
  return function * autoRestarting (...args) {
    while (true) {
      try {
        yield call(generator, ...args)
        break
      } catch (e) {
        yield handleError(e)
      }
    }
  }
}

// Terribad dummy code to test PoC.
let errorNumber = 0

const sagaOne = autoRestart(function * sagaOne () {
  yield delay(1000)
  if (errorNumber < 3) {
    errorNumber++
    yield put(sagaOneMessage(`Error Number ${errorNumber}`))
    throw new Error('Saga One Failed to Do a Thing')
  }
  yield put(sagaOneMessage('Success'))
}, console.error)

const sagaTwo = autoRestart(function * sagaTwo () {
  yield delay(1500)
  yield put(sagaTwoMessage)
}, console.error)

export function * loadHome () {
  yield fork(sagaOne)
  yield fork(sagaTwo)
}
