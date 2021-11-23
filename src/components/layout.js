import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer";
import Navbar from "./navbar";
import { withPrefix } from "gatsby";
import CookieConsent from 'react-cookie-consent';
import Cookies from 'react-cookie-consent';
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import "./all.sass";
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
<Navbar />
      <main>{children}</main>
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          acceptOnScroll={false}
          declineButtonText="Decline"
          enableDeclineButton="true"
          onAccept={(byScroll) => { initializeAndTrack(location); }}
          cookieName="gatsby-gdpr-google-analytics" 
          overlay>
This site uses cookies ...
</CookieConsent>
   <Footer />
    </div>
  )
}

export default Layout
