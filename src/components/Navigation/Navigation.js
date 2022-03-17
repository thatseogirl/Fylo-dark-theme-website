import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>
        <img src={logo} className="book" alt="book" />
      </div>
      <ul className="navigation_list">
        <li>
          <Link to="/" className="navigation_list_link">
            Features
          </Link>
        </li>
        <li>
          <Link to="/Teams" className="navigation_list_link">
            Teams
          </Link>
        </li>
        <li>
          <Link to="/SignUp" className="navigation_list_link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
