import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/param/111111">Param One</Link>
        </li>
        <li>
          <Link to="/param/Two">Param Two</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Menu
