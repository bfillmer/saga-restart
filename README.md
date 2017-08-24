
# Saga Restart

A quick prototype of leveraging a higher-order function to wrap sagas that should continue to retry their tasks even if said task throws an error. See `src/state/sagas/home.js` for the bulk of the code around this.

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `redux-first-router` (https://github.com/faceyspacey/redux-first-router)
* `redux-saga` (https://redux-saga.js.org/)
* `redux-actions` (https://github.com/acdlite/redux-actions)
* `redux-data-structures` (https://redux-data-structures.js.org/)

## Notes on Routing

Routes are state. In this implementation that state is stored in Redux and managed primarily by `redux-first-router`. There are three mappings of route state, the impelmentation of actual browser url to type (`state/routes`), the mapping of types to UI components (`view/Routes`), and the mapping of types to sagas for side-effects (`state/sagas/routes`).
