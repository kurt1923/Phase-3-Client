import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigationWrapper">
      <ul className="navigation">
        <li className="navli">
          <NavLink className="nav" to="/">
            Home
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Login">
            Login
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Customerprojects">
            Projects
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Videos">
            Videos
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Splits">
            Splits
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;