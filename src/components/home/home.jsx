import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import HowItWorks from "../home/how-it-works";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div
          className="page-header header-filter"
          data-parallax="false"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-0.3.5&s=241e83d0f92d415e27c0530a9905e8b9&auto=format&fit=crop&w=3300&q=80')"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6" style={{ color: "#ffffff" }}>
                <h1 className="title" style={{ color: "#ffffff" }}>
                  Doe. Ajude.
                </h1>
                <h4>
                  Tudo o que você precisa para doar ou receber doações
                  gratuitamente.
                </h4>
                <h4>
                  Se você ainda não possui uma conta, não perca tempo e comece
                  agora mesmo.
                </h4>
                <NavLink className="btn btn-primary" to="/register">
                  Criar conta
                </NavLink>
                <br />
              </div>
              <div className="col-md-6" />
            </div>
          </div>
        </div>
        <HowItWorks />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
