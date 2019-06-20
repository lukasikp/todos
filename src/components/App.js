import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";

function App() {
  return (
    <div className="App">
      <h1>todos</h1>
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
