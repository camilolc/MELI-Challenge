import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { Navigation } from "./app/routes/Navigation";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
