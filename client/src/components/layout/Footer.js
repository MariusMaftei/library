import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footerContent}>
        <h3>Library media</h3>
        <p>
          Thank you for visiting the Library. Stay connected with us through our
          social media channels and newsletters to keep up-to-date with the
          latest additions to our collection, upcoming events, and community
          initiatives.
        </p>
        <ul className={classes.socials}>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link to={"google.com"}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.footerBottom}>
        <p>
          copyright &copy;2023 Library. designed by <span>Marius Maftei</span>
        </p>
      </div>
    </footer>
  );
}
