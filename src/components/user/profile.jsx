import React, { Component } from "react";
import ContentNavbar from "../navbar/content-navbar";
import Footer from "../footer/footer";
import ProfileGeneral from "../user/profileGeneral";
import ProfileAddress from "../user/profileAddress";
import authService from "../../services/authService";
import userService from "../../services/userService";

class Profile extends Component {
  state = {};

  style = {
    minHeight: "600px"
  };

  async componentDidMount() {
    const id = authService.getCurrentUser().nameid;
    const { data: result } = await userService.getUser(id);
    const user = result.data;
    this.setState({ user });
  }

  componentWillMount() {
    const user = authService.getCurrentUser();
    this.setState({ userNavbar: user });
  }

  render() {
    return (
      <React.Fragment>
        <ContentNavbar user={this.state.userNavbar} />
        <div className="profile-content">
          <div className="container">
            <h2>Meu perfil</h2>
            <div className="row">
              <div className="col-md-3">
                <ul className="nav nav-pills nav-pills-rose flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#profile-tab"
                      data-toggle="tab"
                    >
                      Dados Gerais
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#address-tab"
                      data-toggle="tab"
                    >
                      Endereço
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className="tab-content" style={this.style}>
                  <div className="tab-pane active" id="profile-tab">
                    {this.state.user && (
                      <ProfileGeneral user={this.state.user} />
                    )}
                  </div>
                  <div className="tab-pane" id="address-tab">
                    {this.state.user && (
                      <ProfileAddress address={this.state.user.address} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Profile;
