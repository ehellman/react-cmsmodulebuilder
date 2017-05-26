import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'

import store, { history } from './store'

import App from 'containers/App'
import BlogPage from 'containers/BlogPage'
import HomePage from 'containers/HomePage'
import Single from 'components/Single'
import Categories from 'containers/Categories'
import NotFound from 'containers/NotFound'

import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './index.css'

const styleSheet = document.createElement('style')
document.head.appendChild(styleSheet)
const styletron = new Styletron([styleSheet])





ReactDOM.render(
  <Provider store={store}>
    <StyletronProvider styletron={styletron}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/post/:id" component={Single} />
            <Route exact path="/categories" component={Categories} />
            <Route component={NotFound} /> 
          </Switch>
        </App>
      </ConnectedRouter>
    </StyletronProvider>
  </Provider>,
  document.getElementById('root')
)

// render(App)
if (module.hot) module.hot.accept('containers/App', () => ReactDOM.render(App))

registerServiceWorker()
