import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import SiteFooter from '../components/footer'
import '../styles/styles.css'

// Frontmatter is tucked inside pageContext
export default function Layout({ children, pageContext, location }) {
  // 1. Destructure with an empty object fallback to avoid "undefined" errors
  const { title } = pageContext?.frontmatter || {};

  // 2. Set a fallback for the title specifically
  const displayTitle = title || "Sheryl Kausek - Senior AEM Content Author, Enterprise CMS, Technical Web Producer";

  //3. Check if homepage
  const isHomepage = location.pathname === "/";

  if (isHomepage) {
    return <>{children}</>;
  }

  return (
    <>
      <Helmet>
        <title>{displayTitle}</title>
        <meta name="description" content="Sheryl Morgan Kausek is a NYC-based senior AEM content author and front-end web developer who maintains enterprise and multilingual websites." />
      </Helmet>
      <Header/>
      <main className='mdx-layout'>
        <div className='mdx'>
        {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
