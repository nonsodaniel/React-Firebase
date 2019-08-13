import React from "react";
import { Link } from 'react-router-dom'

const Footer = props => {
  console.log("chai", props);
  return (
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            info@interswitch.hr
          </Link>
        </li>
      </ul>
      <span className="copyright ml-auto my-auto mr-2">
        Copyright © 2019
        <Link to="acadatrends.com" rel="nofollow">
          Interswitch HR Team
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
