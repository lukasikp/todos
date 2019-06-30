import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import { SubmissionError } from "redux-form";

class RegisterFormContainer extends Component {
  submit = values => {
    if (["kent", "andy", "john", "joel"].includes(values.username)) {
      throw new SubmissionError({
        username: "Username arleady taken"
      });
    } else window.alert(JSON.stringify(values, null));
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
