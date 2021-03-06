import React from "react";
import { NavLink } from "react-router-dom";
import profileImages from "../../images/image";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>
        <img src={profileImages.logo} className="book" alt="book" />
      </div>
      <ul className="navigation_list">
        <li>
          <NavLink to="/" className="navigation_list_link">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/Teams" className="navigation_list_link">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/SignUp" className="navigation_list_link">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
