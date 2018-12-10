import React, { Component } from "react";
import { Link } from "react-router-dom";

class SimpleFooter extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <Link to="/">Doe Aqui</Link>
              </li>
              <li>
                <Link to="/about-us">Quem somos?</Link>
              </li>
              <li>
                <Link to="/partners">Seja um parceiro</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &#xA9;
            {new Date().getFullYear()}, feito com{" "}
            <i className="fa fa-heart heart" /> pela equipe Doe Aqui
          </div>
        </div>
      </footer>
    );
  }
}

export default SimpleFooter;
