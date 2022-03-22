import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Root />
  </SnackbarProvider>,
  document.getElementById("root")
);
