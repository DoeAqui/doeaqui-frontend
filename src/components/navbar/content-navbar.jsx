import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserNavbar from "./user-navbar";

class ContentNavbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Doe Aqui
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  Quem somos?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/partnerships" className="nav-link">
                  Seja um parceiro
                </NavLink>
              </li>
            </ul>
            <UserNavbar />
          </div>
        </div>
      </nav>
    );
  }
}

export default ContentNavbar;
