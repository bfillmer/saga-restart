
import React from 'react'
import {connect} from 'react-redux'

import {getSagaOneMessage, getSagaTwoMessage} from 'selectors'

import {Section} from 'view/Shared/Section'
import {P} from 'view/Shared/Typography'

const mapStateToProps = state => ({
  sagaOneMessage: getSagaOneMessage(state),
  sagaTwoMessage: getSagaTwoMessage(state)
})

export const Container = ({sagaOneMessage, sagaTwoMessage}) => (
  <Section>
    <P>Saga One Message: {sagaOneMessage}</P>
    <P>Saga Two Message: {sagaTwoMessage}</P>
  </Section>
)

export const Home = connect(mapStateToProps)(Container)
