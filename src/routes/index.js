import React, { Component, Fragment } from 'react'
import { HashRouter as MainRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Store from '../store'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Portfolio from '../pages/Portfolio'
import TeachingTalks from '../pages/TeachingTalks'

import Settings from '../styles/settings'
import Generic from '../styles/generic'
import Base from '../styles/base'
import Fonts from '../styles/fonts'

import PageContainer from '../components/PageContainer'

import 'antd/dist/antd.css'

class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MainRouter>
          <Route
            render={({ location }) => (
              <PageContainer>
                <TransitionGroup>
                  <CSSTransition timeout={500} classNames="page" key={location.pathname}>
                    <Fragment>
                      <Switch location={location}>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/teaching-talks" component={TeachingTalks} />
                      </Switch>
                      <Settings />
                      <Fonts />
                      <Generic />
                      <Base />
                    </Fragment>
                  </CSSTransition>
                </TransitionGroup>
              </PageContainer>
            )}
          />
        </MainRouter>
      </Provider>
    )
  }
}

export default Router
