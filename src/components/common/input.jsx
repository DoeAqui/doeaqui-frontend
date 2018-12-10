import React from "react";

const Input = props => {
  return (
    <React.Fragment>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />
      {/* {props.error && <div className="invalid-feedback">{props.error}</div>} */}
    </React.Fragment>
  );
};

export default Input;
