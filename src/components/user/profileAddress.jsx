import React from "react";
import { toast } from "react-toastify";
import Form from "../common/form";
import authService from "../../services/authService";
import userService from "../../services/userService";

class ProfileAddress extends Form {
  state = {
    data: {
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      userId: ""
    }
  };

  async componentDidMount() {
    const data = { ...this.state.data };
    if (this.props.address === null) {
      this.setState({
        data: {
          id: "",
          street: "",
          neighborhood: "",
          city: "",
          state: "",
          country: "",
          postalCode: ""
        }
      });
    } else {
      data.id = this.props.address.id;
      data.street = this.props.address.street;
      data.neighborhood = this.props.address.neighborhood;
      data.city = this.props.address.city;
      data.state = this.props.address.state;
      data.country = this.props.address.country;
      data.postalCode = this.props.address.postalCode;
    }

    this.setState({ data: data || {} });
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const idUser = authService.getCurrentUser().nameid;

      await userService.manageAddress(
        data.id,
        data.street,
        data.neighborhood,
        data.city,
        data.state,
        data.country,
        data.postalCode,
        idUser
      );

      toast.success("Endereço atualizado com sucesso");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.street = ex.response.data.errors;
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
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("street", "Rua")}
          </div>
        </div>
        <div className="form-group bmd-form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("neighborhood", "Bairro")}
          </div>
        </div>
        <div className="form-group bmd-form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("city", "Cidade")}
          </div>
        </div>
        <div className="form-group bmd-form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("state", "Estado")}
          </div>
        </div>
        <div className="form-group bmd-form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("country", "País")}
          </div>
        </div>
        <div className="form-group bmd-form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">place</i>
              </span>
            </div>
            {this.renderInput("postalCode", "CEP")}
          </div>
        </div>
        <div className="text-center">
          {this.renderButton("Salvar", "btn btn-rose")}
        </div>
      </form>
    );
  }
}

export default ProfileAddress;
