import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import AppTheme from "./stores/theme/AppTheme";
import { useNavigate } from "react-router-dom";

import IntlWrapper from "./stores/intl/IntlContext";
import { GlobalProvider } from "./stores/global/GlobalContext";
import LoadingBounce from "./components/LoadingBounce";

function App() {
  const nav = useNavigate();

  //Only for challenge purpose, initialy goes to cart page
  useEffect(() => {
    nav("/cart");
  }, []);

  return (
    <div className="App">
      <AppTheme>
        <GlobalProvider>
          <IntlWrapper>
            <Router />
          </IntlWrapper>
          <LoadingBounce />
        </GlobalProvider>
      </AppTheme>
    </div>
  );
}

export default App;
