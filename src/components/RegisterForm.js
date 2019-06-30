import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { CustomInput, CustomSelect } from "./fields";
import { required, minLength, maxLength } from "../validation";

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
  form: "register"
})(RegisterForm);

export default RegisterForm;
