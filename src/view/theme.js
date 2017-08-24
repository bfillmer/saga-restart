
import {injectGlobal} from 'styled-components'

// Reusable definitions for colors, spacings, etc.
export const theme = {
  white: '#f4f4f4',
  grays: {
    light: '#eee',
    medium: '#999',
    dark: '#333'
  },
  bottomMargin: '1.5rem'
}

// Inject some global styles that are most likely to be coupled to theme variables.
injectGlobal`
  body {
    font-size: 16px;
    font-weight: normal;
    font-family: sans-serif;
    background-color: #fff;
  }
`

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
