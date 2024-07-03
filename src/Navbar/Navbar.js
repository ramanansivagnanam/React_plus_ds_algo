import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About US</Link>
        <Link to='/carrer'>Carrer</Link>
        <Link to='/contact-us'>Contact US</Link>
        <Link to='/dynamic/blabla'>DynamicProfile</Link>
    </div>
  )
}

export default Navbar