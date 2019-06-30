import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null));
  };
  getInitialValues = () => ({
    preference: "spaces",
    newsletter: "true"
  });
  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default RegisterFormContainer;
