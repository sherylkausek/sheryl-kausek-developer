import React from "react"
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="header">
        <div>
        <Link to="/" className="smk">Sheryl Morgan Kausek</Link>
        <a href="https://www.linkedin.com/in/sheryl-morgan-kausek/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </header>
  )
}