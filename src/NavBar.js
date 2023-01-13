import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ noUsers, user, logOut }) {
  return (
    <nav className="navigationWrapper">
      <ul className="navigation">
        <li className="navli">
          <NavLink className="nav" to="/">
            Home
          </NavLink>
        </li>
        {user.email === "admin" && user.customer_id === 1111 ? (
        <li className="navli">
          <NavLink className="nav" to="/Admin">
            Admin
          </NavLink>
        </li>
        ) : null}
        {noUsers ? <li className="navli">
          <NavLink className="nav" to="/Login">
            Login
          </NavLink>
        </li> : (
          <>
        <li className="navli">
          <NavLink className="nav" to="/Customerprojects">
            My Projects
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Createnewproject" >
            Create Projects
          </NavLink>
        </li>
        <li className="navli">
          <NavLink className="nav" to="/Login" onClick={logOut}>
            Logout
          </NavLink>
        </li>
        </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;