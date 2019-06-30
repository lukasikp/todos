import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null));
  };
  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

export default RegisterFormContainer;
