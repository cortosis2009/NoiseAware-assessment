import { createRouteBundle } from 'redux-bundler'

import App from '../Home/App'
import NotFound from '../NotFound'

export default createRouteBundle({
  '/': App,
  '*': NotFound,
})
