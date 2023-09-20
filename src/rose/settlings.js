import React from 'react'
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div>
      <h1>This the setting page</h1>
    <Link to={"/"}>Go back Home</Link><br/>
    <Link to={"/contacts"}>Go to contacts</Link>
    <Link to={"/about"}>Go to About</Link><br/>
    </div>
  )
}

