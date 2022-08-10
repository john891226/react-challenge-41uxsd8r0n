import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Link from "../../components/Link";

import Logo from "../../components/Logo";

interface Props {
  children?: React.ReactNode;
}

function CartContainerHeader({ children }: Props) {
  return (
    <Grid
      container
      direction={"row"}
      bgcolor="dark.01"
      color="white"
      alignItems="center"
      sx={{
        width: "100vw",
        paddingX: {
          xs: "10px",
          sm: "92px",
        },
        paddingY: {
          xs: "10px",
          sm: "20px",
        },
        gap: {
          xs: "68px",
        },
      }}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item xs>
        {children}
      </Grid>
      <Grid
        container
        item
        color="white"
        sx={{
          fontSize: "15px",
          width: "auto",
          flexWrap: "nowrap",
          gap: {
            xs: "6px",
            sm: "12px",
          },
        }}
      >
        <Link icon={PersonOutline} to={"/signin"}>
          Sign In
        </Link>
        <Link icon={ShoppingBagOutlined} to={"/cart"}>
          Cart
        </Link>
      </Grid>
    </Grid>
  );
}

export default CartContainerHeader;
