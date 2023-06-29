import React from 'react'
import '../../Style/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul className='ul'>
          <li className='link'>< Link to="/">Home</Link></li>
          <li className='link'>< Link to="/newpost">Newpost</Link></li>
          <li className='link'>< Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar