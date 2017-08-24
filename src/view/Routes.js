
import React from 'react'
import {connect} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import {routeType} from 'selectors'
import {ROUTE_HOME} from 'types'
import {Home} from 'view/Home'

const routesMap = {
  [ROUTE_HOME]: Home,
  [NOT_FOUND]: Home
}

const mapStateToProps = state => ({
  route: routeType(state)
})

const Container = ({route}) => {
  const Route = routesMap[route] ? routesMap[route] : routesMap[NOT_FOUND]
  return (
    <Route />
  )
}

export const Routes = connect(mapStateToProps)(Container)
