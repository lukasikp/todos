import React, { PropTypes } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions/todos";

const AddTodo = props => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          props.addTodo(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
