import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "./Footer";

function App({ match }) {
  return (
    <div className="App">
      <h1>todos</h1>
      <AddTodo />
      <VisibleTodoList filter={match.params.filter || "all"} />
      <Footer />
    </div>
  );
}

export default App;
