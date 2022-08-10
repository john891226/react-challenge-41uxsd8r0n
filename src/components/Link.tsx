import { Grid, SvgIconTypeMap, SxProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { Link as L } from "react-router-dom";

interface Props {
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  children: React.ReactNode;
  sx?: SxProps;
  to: string;
}

export default function Link({ icon: Icon, children, sx = {}, to }: Props) {
  return (
    <Grid
      container
      direction={"row"}
      alignItems="center"
      justifyContent={"left"}
      sx={{ minWidth: "80px", ...sx, cursor: "pointer" }}
    >
      {Icon && (
        <Grid item sx={{ display: "flex" }}>
          {<Icon sx={{ fontSize: "30px" }} />}
        </Grid>
      )}
      <Grid xs item sx={{ textAlign: "left", whiteSpace: "nowrap" }}>
        <L to={to} style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </L>
      </Grid>
    </Grid>
  );
}
