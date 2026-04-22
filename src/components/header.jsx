import React from "react"
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="header">
        <div>
        <Link to="/" className="smk">Sheryl Morgan Kausek</Link>
        <a href="mailto:sheryl.morgan@kausek.com">Contact me</a>
        </div>
    </header>
  )
}