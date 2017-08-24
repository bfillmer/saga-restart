
import {createAction} from 'redux-actions'

import * as types from 'types'

// ROUTING
export const routeHome = createAction(types.ROUTE_HOME)

// MESSAGING
export const addMessage = createAction(types.ADDED_MESSAGE)
