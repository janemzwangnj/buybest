import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar(props) {
  let storeName = props.storeName;
  console.log(storeName)
  return (
    <aside>
      <nav>
        <NavLink to={`${storeName}/productlist`}>ProductList</NavLink>
        <NavLink to={`${storeName}/productdetails`}>ProductDetails</NavLink>
        <NavLink to={`${storeName}/addreview`}>AddReview</NavLink>
      </nav>
    </aside>
  )
}