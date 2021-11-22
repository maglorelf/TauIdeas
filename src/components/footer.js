import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/tauideas.png";
import twitter from "../images/social/twitter.svg";
import linkedin from "../images/social/linkedin.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Tauideas"
            style={{  }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal/about">
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/legal/cookie_policy">
                        Cookie policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal/terms_of_use">
                        Terms of use
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/legal/privacy_policy">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
              
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="linkedin" href="https://linkedin.com">
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="Linkedin"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
               
              </div>
            </div>
           <div>
           <div className="content has-text-left">
        © {new Date().getFullYear()},Tauideas by Marcos J. Martínez Ramos
        {` `}
        
           </div>
           </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
