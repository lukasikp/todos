import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { CustomInput, CustomSelect, discounts } from "./fields";
import capitalize from "capitalize";
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
          normalize={capitalize}
        />
        <Field
          name="surname"
          component={CustomInput}
          type="text"
          label="Surname"
          validate={[required]}
          normalize={capitalize}
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
        <FieldArray name="discountCodes" component={discounts} />
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
