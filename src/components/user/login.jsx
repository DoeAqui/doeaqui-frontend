import React from "react";
import { Redirect, Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import Form from "../common/form";
import SimpleFooter from "../footer/simpleFooter";
import authService from "../../services/authService";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
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
      const result = await authService.login(data.email, data.password);

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
    if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col-md-6" style={{ paddingRight: "0px" }}>
          <div
            className="page-header header-filter"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1472666260353-23210544cdf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80')"
            }}
          />
        </div>
        <div className="col-md-6">
          <div className="login-page">
            <div className="page-header">
              <div className="container" style={{ color: "#3C4858" }}>
                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-6 col-sm-9 ml-auto">
                    <h1 className="text-center">Olá</h1>
                    <p className="description text-center">
                      Entre com sua conta para continuar
                    </p>
                    <form className="form" onSubmit={this.handleSubmit}>
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
                      <div className="form-group bmd-form-group">
                        {this.renderInput("password", "Senha", "password")}
                        <small className="form-text text-error">
                          {this.validator.message(
                            "password",
                            this.state.data.password,
                            "required"
                          )}
                        </small>
                      </div>
                      <div className="text-center">
                        {this.renderButton("Entrar", "btn btn-rose")}
                      </div>
                    </form>
                    <div className="text-center">
                      <p>
                        Não possui uma conta ainda?{" "}
                        <Link to="/register">Crie aqui.</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
              <div style={{ paddingTop: "150px" }}>
                <SimpleFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
