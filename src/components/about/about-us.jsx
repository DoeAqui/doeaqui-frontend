import React, { Component } from "react";
import ContentNavbar from "../navbar/content-navbar";
import Footer from "../footer/footer";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ContentNavbar />

        <div className="container">
          <h1>Quem somos?</h1>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
