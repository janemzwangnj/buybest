import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/productlist">Prod</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}