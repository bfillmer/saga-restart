
# Playground

General React playground for experimenting with new things.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `redux-first-router` (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` (https://redux-saga.js.org/)
* `redux-actions` (https://github.com/acdlite/redux-actions)

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).
