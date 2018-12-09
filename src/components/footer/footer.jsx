import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer footer-black footer-big">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-3">
                <Link to="/">
                  <h5>Doe Aqui</h5>
                </Link>
                <p>
                  Provavelmente a melhor plataforma de doações do mundo! Nós
                  sabemos que você estava esperando por isso, portanto não seja
                  tímido!
                </p>
              </div>
              <div className="col-md-3">
                <h5>Sobre</h5>
                <ul className="links-vertical">
                  <li>
                    <Link to="/about-us">Quem somos</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Plataforma</h5>
                <ul className="links-vertical">
                  <li>
                    <Link to="/">Para doadores</Link>
                  </li>
                  <li>
                    <Link to="/register">Como se cadastrar</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Business</h5>
                <ul className="links-vertical">
                  <li>
                    <Link to="/partnerships">Seja um parceiro</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <ul className="social-buttons">
            <li>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-link btn-twitter"
              >
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-link btn-facebook"
              >
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-link btn-dribbble"
              >
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-link btn-google"
              >
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                className="btn btn-just-icon btn-link btn-youtube"
              >
                <i className="fa fa-youtube-play" />
              </a>
            </li>
          </ul>
          <div className="copyright pull-center">
            Copyright &#xA9;
            {new Date().getFullYear()} Doe Aqui. Feito com{" "}
            <i className="fa fa-heart heart" /> pela equipe Doe Aqui.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
