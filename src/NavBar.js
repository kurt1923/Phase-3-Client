import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ noUsers, user, logOut }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <img className="logo" src="./pics/logo REVISED.jpg" alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto gap-3">
            <li className="nav-item rounded">
              <NavLink className="nav-link active" aria-current="page" to="/">
                <i className="bi bi-house-fill me-2"></i>Home
              </NavLink>
            </li>
            {user.email === "admin" && user.customer_id === 1111 ? (
              <li className="nav-item rounded">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/Admin"
                >
                  Admin
                </NavLink>
              </li>
            ) : null}
            {noUsers ? null : (
              <>
                <li className="nav-item rounded">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/Customerprojects"
                  >
                    My Projects
                  </NavLink>
                </li>
                <li className="nav-item rounded">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/Createnewproject"
                  >
                    Create Projects
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item dropdown rounded">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill me-2"></i>Profile
                </span>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                {noUsers ? (
                  <li className="dropdown-item">
                    <NavLink to="/Login">Login</NavLink>
                  </li>
                ) : (
                  <>
                  <li className="dropdown-item">
                  <NavLink to="/Customerinfo" >
                    Info
                  </NavLink>
                </li>
                  <li className="dropdown-item">
                    <NavLink to="/Login" onClick={logOut}>
                      Logout
                    </NavLink>
                  </li>
                </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
