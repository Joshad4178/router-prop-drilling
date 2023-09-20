import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1>This the About page</h1>
    <Link to={"/"}>Go back Home</Link><br/>
    <Link to={"/contacts"}>Go to contacts</Link><br/>
    <Link to={"/settlings"}>Go to settings</Link>
    </div>
  )
}
