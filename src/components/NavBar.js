import React from "react";
import "../styles/navBar.css";
import { Link } from "react-router-dom";
import Properties from "./Properties";

const NavBar = () => {
  return (
    <div className="navBar">
      <img
        className="surreal-estate-logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surrealEstateLogo"
      />
      <div className="navbar-links">
        <ul className="navbar-links-item">
          <li>
            <Link to="/"> View Properties</Link>
          </li>

          <li>
            <Link to="/add-property"> Add a property</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
