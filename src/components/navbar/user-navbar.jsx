import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserNavbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <ul className="navbar-nav ml-auto">
          {user && (
            <li className="dropdown nav-item">
              <NavLink
                to=""
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                {user.unique_name}
              </NavLink>
              <div className="dropdown-menu dropdown-with-icons">
                <NavLink to="/profile" className="dropdown-item">
                  <i className="material-icons">person</i> Meu Perfil
                </NavLink>
                <NavLink to="/my-donations" className="dropdown-item">
                  <i className="material-icons">local_mall</i> Minhas Doações
                </NavLink>
                <NavLink to="/my-bids" className="dropdown-item">
                  <i className="material-icons">how_to_vote</i> Meus Interesses
                </NavLink>
                <div className="dropdown-divider" />
                <NavLink to="/logout" className="dropdown-item">
                  <i className="material-icons">power_settings_new</i> Sair
                </NavLink>
              </div>
            </li>
          )}
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Entrar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Criar Conta
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default UserNavbar;
