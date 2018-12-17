import React from "react";
import SimpleReactValidator from "simple-react-validator";
import Form from "../common/form";
import SimpleFooter from "../footer/simpleFooter";
import userService from "../../services/userService";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      phone: ""
    }
  };

  validator = {};

  constructor() {
    super();
    this.validator = new SimpleReactValidator({
      messages: {
        required: "Por favor, preencha este campo"
      }
    });
  }

  doSubmit = async () => {
    if (this.validator.allValid()) {
      const { data } = this.state;
      const result = await userService.register(
        data.name,
        data.email,
        data.password,
        data.phone
      );

      if (result.success === true) {
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : "/";
      } else if (result.success === false) {
        this.showErrors(result.errors);
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="col-md-6" style={{ paddingRight: "0px" }}>
            <div
              className="page-header header-filter"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')"
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto">
                    <div className="info-register info-horizontal">
                      <div className="icon icon-info">
                        <i className="material-icons">card_giftcard</i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Doações</h4>
                        <p className="description">
                          Nunca foi táo fácil achar as pessoas certas para
                          realizar as suas doações.
                        </p>
                      </div>
                    </div>
                    <div className="info-register info-horizontal">
                      <div className="icon icon-success">
                        <i className="material-icons">attach_money</i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Interesse</h4>
                        <p className="description">
                          Aqui a "moeda" é a sua história. Mostre interesse em
                          uma doação, e diga o porquê você deve ganhar esta
                          doação.
                        </p>
                      </div>
                    </div>
                    <div className="info-register info-horizontal">
                      <div className="icon icon-danger">
                        <i className="material-icons">favorite_border</i>
                      </div>
                      <div className="description">
                        <h4 className="info-title">Ajude!</h4>
                        <p className="description">
                          Não deixe essa corrente acabar. Divulge! Ajude! Doe!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="signup-page">
              <div className="page-header">
                <div className="container" style={{ color: "#3C4858" }}>
                  <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6 col-sm-9 ml-auto">
                      <h1 className="text-center">Olá</h1>
                      <p className="description text-center">
                        Crie uma conta agora mesmo e comece a doar
                      </p>
                      <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group bmd-form-group ">
                          {this.renderInput("name", "Nome")}
                          <small className="form-text text-error">
                            {this.validator.message(
                              "name",
                              this.state.data.email,
                              "required"
                            )}
                          </small>
                        </div>
                        <div className="form-group bmd-form-group ">
                          {this.renderInput("email", "Email")}
                          <small className="form-text text-error">
                            {this.validator.message(
                              "email",
                              this.state.data.email,
                              "required"
                            )}
                          </small>
                        </div>
                        <div className="form-group bmd-form-group ">
                          {this.renderInput("password", "Senha", "password")}
                          <small className="form-text text-error">
                            {this.validator.message(
                              "password",
                              this.state.data.email,
                              "required"
                            )}
                          </small>
                        </div>
                        <div className="form-group bmd-form-group ">
                          {this.renderInput("phone", "Telefone")}
                          <small className="form-text text-error">
                            {this.validator.message(
                              "phone",
                              this.state.data.email,
                              "required"
                            )}
                          </small>
                        </div>
                        <div className="text-center">
                          {this.renderButton("Criar", "btn btn-rose")}
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                {/* <div style={{ paddingTop: "90px" }}>
                  <SimpleFooter />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
