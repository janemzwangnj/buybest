import React from 'react'

export default function Search(props) {
  return <form onSubmit={props.onSubmit}>
    <input type="text" name="search" value={props.value} placeholder="Search Products" onChange={props.onChange} />
    <button type="submit">Submit</button>
  </form>
}
