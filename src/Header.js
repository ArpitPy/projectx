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
          <li>Home</li>
          <li>About Me</li>
          <li>Contact</li>
          <Link to="/Contact">
          <button type="button" className="header__signup">Sign Up</button></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
