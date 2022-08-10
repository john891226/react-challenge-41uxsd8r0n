import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { ChildrenCmp } from "../../types/react";

function AppTheme({ children }: ChildrenCmp) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
    palette: {
      primary: {
        main: "#091625",
      },
      dark: {
        "01": "#091625",
        "03": "#3A4451",
        "04": "#535C67",
        "05": "#6B737C",
        "06": "#848A92",
        "09": "#CED0D3",
        "10": "#E6E8E9",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppTheme;
