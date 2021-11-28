import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/tauideas.png";
import twitter from "../images/social/twitter.svg";
import linkedin from "../images/social/linkedin.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary-light has-text-link">
        <div className="content has-text-left ">
          <img className="ml-3"
            src={logo}
            alt="Tauideas"
            style={{  }}
          />
        </div>
        <div className="content has-text-left has-background-primary-light has-text-link ml-3">
         
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-one-third">
                <section >
                 <p className="mb-0">

                      <Link to="/" >
                        Home
                      </Link>
                 </p>
                   <p className="mb-0">

                      <Link to="/legal/about">
                        About
                      </Link>
                   </p>                   
                </section>
              </div>
              <div className="column is-one-third">
                <section>
                <p className="mb-0">  
                      <Link to="/legal/cookie_policy">
                        Cookie policy
                      </Link>
                      </p>
                   <p className="mb-0">
                      <Link to="/legal/terms_of_use">
                        Terms of use
                      </Link>
                      </p>
                   <p className="mb-0">
                      <Link to="/legal/privacy_policy">
                        Privacy policy
                      </Link>
                      </p>                                
                </section>
              </div>
              <div className="column is-one-third social">
              
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
         
           <div className="content has-text-left has-text-primary"><p className="mb-0">
        © {new Date().getFullYear()}, Tauideas by Marcos J. Martínez Ramos
        {` `}
        </p>
          
           </div>
         
        </div>
      </footer>
    );
  }
};

export default Footer;
