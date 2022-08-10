import { Grid } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode[];
}

function LinksSection({ children, title }: Props) {
  return (
    <Grid container direction={"column"} sx={{ gap: "24px" }}>
      <Grid
        item
        fontSize={"16px"}
        fontWeight="700"
        color="dark.01"
        textAlign={"start"}
      >
        {title}
      </Grid>
      {children && children.map((c) => <Grid item>{c}</Grid>)}
    </Grid>
  );
}

export default LinksSection;
