
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {ROUTE_HOME} from 'types'

const routesMap = {
  [ROUTE_HOME]: '/'
}

const history = createHistory()

export const {
  reducer,
  middleware,
  enhancer,
  initialDispatch
} = connectRoutes(history, routesMap)
