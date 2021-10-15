import React from "react";
import "./Header.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <h1 className="header__logo">ProjectX</h1>
        <ul className="header__links">
          <Link to="/" style={{textDecoration: 'none'}}>
            <li>Home</li>
          </Link>
          <li>About Me</li>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
          <Link to="/Contact">
            <button type="button" className="header__signup">
              Sign Up
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
