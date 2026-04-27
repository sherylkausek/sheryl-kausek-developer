import * as React from "react"
import { Link } from "gatsby"

const spacer = {
  marginTop: 12,
  marginBottom: 64,
}

const NotFoundPage = () => {
  return (
    <main style={spacer}>
      <h2>Page not found</h2>
      <p>
        Sorry, the page you were looking for does not exist.
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
      </p>

      <hr />

      <p>
        <Link to="/"><span>Return to home</span></Link>
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
