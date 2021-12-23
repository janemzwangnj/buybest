import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fakestore/productlist">FakeStore</NavLink>
        <NavLink to="/homedepot">HomeDepot</NavLink>
        <NavLink to="/walmart">Walmart</NavLink>
      </nav>
    </header>
  )
}