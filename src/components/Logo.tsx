import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <Grid
      bgcolor="dark.09"
      color="dark.06"
      fontSize={"13px"}
      className="asd"
      sx={{
        padding: "16px",
        minWidth: {
          sm: "100px",
          md: "1px",
        },
        cursor: "pointer",
      }}
      container
      item
      justifyContent={"center"}
      onClick={() => {
        navigate("/");
      }}
    >
      Logo
    </Grid>
  );
}

export default Logo;
