import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <img src={logo} className="book" alt="book" />
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Feature">Features</Link>
        </li>
        <li>
          <Link to="/Teams">Teams</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
