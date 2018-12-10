import React from "react";
import { Redirect, Link } from "react-router-dom";
import Form from "../common/form";
import authService from "../../services/authService";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    }
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.errors;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
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
                    <div className="col-md-6 col-sm-8 ml-auto mr-auto">
                      <h1 className="text-center">Olá</h1>
                      <p className="description text-center">
                        Entre com sua conta para continuar
                      </p>
                      <form className="form" onSubmit={this.doSubmit}>
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
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            {this.renderInput("password", "Senha", "password")}
                          </div>
                        </div>
                        <div className="text-center">
                          {this.renderButton("Entrar", "btn btn-primary")}
                        </div>
                      </form>
                      <div className="text-center">
                        <p>
                          Não possui uma conta ainda?{" "}
                          <Link to="/register">Crie aqui.</Link>
                        </p>
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

export default Login;
