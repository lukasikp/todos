import React from "react";
import { Field } from "redux-form";
import cx from "classnames";

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return "async-validating";
  }
  if (meta.active) return;
  if (meta.touched && meta.invalid) {
    return "invalid";
  }
  if (meta.touched && meta.valid) {
    return "valid";
  }
};

export const CustomInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <label>{label}</label>
      <input {...input} type={type} autoFocus={props.autoFocus} />
      {meta.error && meta.touched && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};

export const CustomSelect = props => (
  <div>
    <label>{props.label}</label>
    <select {...props.input}>
      <option value="tabs">Tabs</option>
      <option value="spaces">Spaces</option>
    </select>
  </div>
);

export const discounts = ({ fields }) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={index} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={CustomInput}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button type="button" onClick={() => fields.remove(index)}>
          &times;
        </button>
      </div>
    ))}
    <button type="button" onClick={() => fields.push()}>
      Add {!fields.length ? "Discount Code(s)" : "Another"}
    </button>
  </div>
);
