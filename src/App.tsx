import React from "react";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./config";
import RootNavigator from "./RootNavigator";
import store from "./store";
import "./config/translations/i18n";
import "./config/styles/style.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
