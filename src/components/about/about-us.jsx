import React, { Component } from "react";
import ContentNavbar from "../navbar/content-navbar";
import Footer from "../footer/footer";
import authService from "../../services/authService";

class AboutUs extends Component {
  state = {};

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ContentNavbar user={this.state.user} />

        <div className="container">
          <h1>Quem somos?</h1>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
