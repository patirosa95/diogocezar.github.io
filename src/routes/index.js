import React, { Component, Fragment } from 'react'
import { HashRouter as MainRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import About from '../pages/About'
import { Blog, BlogDetails } from '../pages/Blog'
import KeepInTouch from '../pages/KeepInTouch'
import Main from '../pages/Main'
import Portfolio from '../pages/Portfolio'
import Educational from '../pages/Educational'
import NotFound from '../pages/NotFound'

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
                        <Route exact path="/blog/:page" component={Blog} />
                        <Route exact path="/blog/details/:slug/:source" component={BlogDetails} />
                        <Route exact path="/keep-in-touch" component={KeepInTouch} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/educational" component={Educational} />
                        <Route exact path="*" component={NotFound} />
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
