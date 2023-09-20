import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div>
      <h1>This the Home page</h1>
    {/* <Link to={"./"}>Go back Home</Link><br/> */}
    <Link to={"/settlings"}>Go to settings</Link><br/>
    <Link to={"/contacts"}>Go to contacts</Link><br/>
    <Link to={"/about"}>Go to About</Link>
    </div>
  )
}
