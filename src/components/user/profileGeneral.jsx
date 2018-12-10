import React from "react";
import { toast } from "react-toastify";
import Form from "../common/form";
import authService from "../../services/authService";
import userService from "../../services/userService";

class ProfileGeneral extends Form {
  state = {
    data: {
      name: "",
      email: "",
      phone: ""
    }
  };

  async componentDidMount() {
    const data = { ...this.state.data };
    data.name = this.props.user.name;
    data.email = this.props.user.email;
    data.phone = this.props.user.phone;

    this.setState({ data });
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const idUser = authService.getCurrentUser().nameid;

      await userService.update(idUser, data.name, data.email, data.phone);

      toast.success("Dados gerais atualizados com sucesso");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.errors;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
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
                <i className="material-icons">phone</i>
              </span>
            </div>
            {this.renderInput("phone", "Telefone")}
          </div>
        </div>
        <div className="text-center">
          {this.renderButton("Salvar", "btn btn-rose")}
        </div>
      </form>
    );
  }
}

export default ProfileGeneral;
