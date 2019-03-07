import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import * as serviceWorker from './service-worker'

ReactDOM.render(<Routes />, document.getElementById('root'))

serviceWorker.unregister()
