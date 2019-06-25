import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import todoApp from "./reducers";
import * as serviceWorker from "./serviceWorker";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
