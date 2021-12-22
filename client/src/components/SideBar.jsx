import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar(props) {
  return (
    <aside className='fakeaside'>
      <nav className='fakenav'>
        <NavLink to={`${props.storeName}/productlist`}>Products</NavLink>
        <NavLink to={`${props.storeName}/productdetails`}>Product Details</NavLink>
        <NavLink to={`${props.storeName}/addreview`}>Add Review</NavLink>
      </nav>
    </aside>
  )
}