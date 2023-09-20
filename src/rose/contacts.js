import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
  <div>
    <h1>This the contact page</h1>
    <Link to={"/"}>Go back Home</Link><br/>
    <Link to={"/settlings"}>Go back settings</Link><br/>
    <Link to={"/contacts"}>Go back contacts</Link><br/>
    <Link to={"/about"}>Go to About</Link>
  </div>
  )
}
