import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./pages/multiLanguage/wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Wrapper>
);
