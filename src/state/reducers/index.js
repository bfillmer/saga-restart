
import {combineReducers} from 'redux'

import {reducer as location} from 'state/routes'
import {reducer as messages} from 'state/reducers/messages'

export const reducers = combineReducers({
  location,
  messages
})
