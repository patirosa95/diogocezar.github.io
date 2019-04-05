import React, { Component, Fragment } from 'react'
import { HashRouter as MainRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Main from '../pages/Main'
import Portfolio from '../pages/Portfolio'
import TeachingTalks from '../pages/TeachingTalks'

import Settings from '../styles/settings'
import Generic from '../styles/generic'
import Base from '../styles/base'
import Fonts from '../styles/fonts'

import AnimationContainer from '../components/AnimationContainer'

import 'antd/dist/antd.css'

class Router extends Component {
  render() {
    return (
      <Fragment>
        <MainRouter>
          <Route
            render={({ location }) => (
              <AnimationContainer>
                <TransitionGroup>
                  <CSSTransition timeout={1000} classNames="page" key={location.pathname}>
                    <Fragment>
                      <Switch location={location}>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/teaching-talks" component={TeachingTalks} />
                      </Switch>
                    </Fragment>
                  </CSSTransition>
                </TransitionGroup>
              </AnimationContainer>
            )}
          />
        </MainRouter>
        <Settings />
        <Fonts />
        <Generic />
        <Base />
      </Fragment>
    )
  }
}

export default Router
