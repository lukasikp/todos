import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { CustomInput, CustomSelect } from "./fields";
import { validate } from "../validation";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={CustomInput}
          type="text"
          label="First name"
        />
        <Field
          name="surname"
          component={CustomInput}
          type="text"
          label="Surname"
        />
        <Field
          name="username"
          component={CustomInput}
          type="text"
          label="Username"
        />

        <Field
          name="preference"
          component={CustomSelect}
          label="Preffered Formatting"
        />
        <Field
          name="newsletter"
          component={CustomInput}
          type="checkbox"
          label="Sign up to newsletter?"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default RegisterForm;
