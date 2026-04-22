import React from 'react'
import SiteFooter from './footer'
import '../styles/styles.css'

// Frontmatter is tucked inside pageContext
export default function Layout({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter || {};

  return (
    <div className="layout-wrapper">
      {title && <h1>{title}</h1>}
      {date && <p>Published on: {date}</p>}
      
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
