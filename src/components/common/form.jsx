import React, { Component } from "react";
import { toast } from "react-toastify";
// import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {}
    // errors: {}
  };

  // validate = () => {
  //   const options = { abortEarly: false };
  //   const result = Joi.validate(this.state.data, this.schema, options);
  //   if (!result.error) return null;
  //   const errors = {};
  //   for (let item of result.error.details) errors[item.path[0]] = item.message;

  //   return errors;
  // };

  handleSubmit = e => {
    e.preventDefault();

    // const errors = this.validate();
    // this.setState({ errors: errors || {} });

    // if (errors) return;

    this.doSubmit();
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  renderButton(label, buttonClass = "btn btn-primary") {
    return <button className={buttonClass}>{label}</button>;
  }

  renderInput(name, label, type = "text") {
    return (
      <Input
        name={name}
        value={this.state.data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        // error={this.state.errors[name]}
      />
    );
  }

  showErrors(errors) {
    errors.forEach(error => {
      toast.error(error);
    });
  }
}

export default Form;
