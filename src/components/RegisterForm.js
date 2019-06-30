import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { CustomInput, CustomSelect } from "./fields";
import {
  required,
  minLength,
  maxLength,
  matchesPassword,
  asyncValidate
} from "../validation";

import "./RegisterForm.css";

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
          validate={[required]}
        />
        <Field
          name="surname"
          component={CustomInput}
          type="text"
          label="Surname"
          validate={[required]}
        />
        <Field
          name="username"
          component={CustomInput}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          component={CustomInput}
          type="password"
          label="Password"
          validate={[required]}
        />
        <Field
          name="confirmPassword"
          component={CustomInput}
          type="password"
          label="Confirm password"
          validate={[required, matchesPassword]}
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
  asyncValidate,
  asyncBlurFields: ["username"]
})(RegisterForm);

export default RegisterForm;
