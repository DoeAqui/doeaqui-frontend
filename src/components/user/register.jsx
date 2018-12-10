import React, { Component } from "react";
import Form from "../common/form";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      phone: ""
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="signup-page">
          <div className="page-header" filter-color="purple">
            <div className="container">
              <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                  <div className="card card-signup">
                    <h2 className="card-title text-center">Seja bem vindo</h2>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-5 ml-auto">
                          <div className="info info-horizontal">
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
                          <div className="info info-horizontal">
                            <div className="icon icon-success">
                              <i className="material-icons">attach_money</i>
                            </div>
                            <div className="description">
                              <h4 className="info-title">Interesse</h4>
                              <p className="description">
                                Aqui a "moeda" é a sua história. Mostre
                                interesse em uma doação, e diga o porquê você
                                deve ganhar esta doação.
                              </p>
                            </div>
                          </div>
                          <div className="info info-horizontal">
                            <div className="icon icon-danger">
                              <i className="material-icons">favorite_border</i>
                            </div>
                            <div className="description">
                              <h4 className="info-title">Ajude!</h4>
                              <p className="description">
                                Não deixe essa corrente acabar. Divulge! Ajude!
                                Doe!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5 mr-auto">
                          <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-group bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">face</i>
                                  </span>
                                </div>
                                {this.renderInput("name", "Nome")}
                              </div>
                            </div>
                            <div className="form-group bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">mail</i>
                                  </span>
                                </div>
                                {this.renderInput("email", "Email")}
                              </div>
                            </div>
                            <div className="form-group bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">
                                      lock_outline
                                    </i>
                                  </span>
                                </div>
                                {this.renderInput(
                                  "password",
                                  "Senha",
                                  "password"
                                )}
                              </div>
                            </div>
                            <div className="form-group bmd-form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="material-icons">phone</i>
                                  </span>
                                </div>
                                {this.renderInput("phone", "Telefone")}
                              </div>
                            </div>
                            <div className="text-center">
                              {this.renderButton(
                                "Criar conta",
                                "btn btn-rose btn-round"
                              )}
                            </div>
                            <br />
                            <br />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
