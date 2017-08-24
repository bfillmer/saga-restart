
import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import {Header} from 'view/Shared/Header'
import {Routes} from 'view/Routes'

import {theme} from 'view/theme'

// GLOBAL WRAPPER
const Wrapper = styled.div`
  height: 100vh;
`

export const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  </ThemeProvider>
)
