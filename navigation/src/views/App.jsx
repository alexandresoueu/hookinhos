import React from 'react'

import './App.css'
import Content from './components/layout/Content'
import Menu from './components/layout/Menu'

const App = props => (
  <div className="App">
    <Menu />
    <Content />
  </div>
)

export default App