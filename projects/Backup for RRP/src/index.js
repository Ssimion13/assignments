import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"

import {Provider} from "react-redux"
import "./styles.css";
import reducer from "./redux";
import {createStore} from "redux"
import App from "./App";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
<BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
