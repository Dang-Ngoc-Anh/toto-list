import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from './store/reducers/index'
import {Theme} from "./components/Theme/ThemeContext";

const store = createStore(allReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Theme>
      <GlobalStyles>
          <App />
      </GlobalStyles>
    </Theme>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
