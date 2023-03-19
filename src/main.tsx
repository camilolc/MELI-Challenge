import React from "react";
import ReactDOM from "react-dom/client";
//Redux
import { store } from "./app/store/store";
import { Provider } from "react-redux";
//Router
import { Navigation } from "./app/routes/Navigation";
import { BrowserRouter } from "react-router-dom";
//Css
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
