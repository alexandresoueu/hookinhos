import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './Content.css'

import About from '../../examples/About'
import Home from '../../examples/Home'

const Content = props => (
  <main className="Content">
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </main>
)

export default Content
