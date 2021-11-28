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
    <div className="global-wrapper fullpage" data-is-root-path={isRootPath}>
       
        <header className="global-header">           
        <Navbar />
      </header>
     <div class="fullpage">
      
      <main>{children}</main>
      <CookieConsent
          location="bottom"
          buttonText="Accept"
          acceptOnScroll={false}
          declineButtonText="Decline"
          enableDeclineButton="true"
          onAccept={(byScroll) => { initializeAndTrack(location); }}
          cookieName="gatsby-gdpr-google-analytics" 
          overlay="true">
This site (TauIdeas.tech) uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. 
By using our website, you agree to our <Link to="/legal/privacy_policy">
        Privacy policy
      </Link> and our <Link to="/legal/cookie_policy">
        Cookies policy
      </Link>.            
      </CookieConsent>
   <Footer />
    </div></div>
  )
}

export default Layout
