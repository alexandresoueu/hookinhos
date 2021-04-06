import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Content.css'

import About from '../../examples/About'
import Home from '../../examples/Home'
import Param from '../../examples/Param'
import NotFoundPage from '../../examples/NotFoundPage'

const Content = props => (
  <main className="Content">
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/param/:id'>
        <Param />
      </Route>
      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  </main>
)

export default Content
