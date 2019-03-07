import React, { Component, Fragment } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '../store'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Portfolio from '../pages/Portfolio'
import TeachingTalks from '../pages/TeachingTalks'

import Settings from '../styles/settings'
import Generic from '../styles/generic'
import Base from '../styles/base'

class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <HashRouter>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/teaching-talks" component={TeachingTalks} />
            </Switch>
            <Settings />
            <Generic />
            <Base />
          </Fragment>
        </HashRouter>
      </Provider>
    )
  }
}

export default Router
