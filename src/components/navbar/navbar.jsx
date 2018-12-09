import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"
        color-on-scroll="100"
      >
        <div className="container">
          <div className="navbar-translate">
            <NavLink className="navbar-brand" to="/">
              Doe Aqui
            </NavLink>
            <button
              className="ml-auto navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="example-navbar-transparent"
          >
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
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
