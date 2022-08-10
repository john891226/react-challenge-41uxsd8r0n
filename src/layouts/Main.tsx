import { Box, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import CartContainerHeader from "../containers/Cart/CartContainerHeader";
import { ChildrenCmp } from "../types/react";

interface Props {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

function Main({ header, children, footer }: Props) {
  return (
    <CssBaseline>
      <Grid
        bgcolor="dark.10"
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {header && <Grid item>{header}</Grid>}
        <Grid item>{children}</Grid>
        {footer && <Grid item>{footer}</Grid>}
      </Grid>
    </CssBaseline>
  );
}

export default Main;
