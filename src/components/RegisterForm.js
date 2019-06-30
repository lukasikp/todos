import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { CustomInput, CustomSelect } from "./fields";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" component={CustomInput} type="text" label="Name" />
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
