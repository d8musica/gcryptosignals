import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import "./index.css";
import fbConfig from "./firebase.config";
import App from "./components/App/App.js";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { getBars } from "./lib/ccxt";
const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({
  getFirebase, getBars})),
  reactReduxFirebase(fbConfig)
  )
  );
const Root = (
  <Provider store={store}>
    <App id="App" />
  </Provider>
);
ReactDOM.render(Root, document.getElementById("root"));
