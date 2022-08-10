import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Product } from "../types/products";

interface Props {
  product: Product;
}

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

function sum(
  method: (...values: number[]) => number,
  obj: Record<string, { price: number }[]>
): number {
  const res: Record<string, number> = {};
  for (const key in obj) {
    res[key] = method(...obj[key].map(({ price }) => price));
  }
  return Object.values(res).reduce((acc, n) => acc + n, 0);
}

function RelatedProduct({ product }: Props) {
  const customizable = typeof product.price != "number";

  const minPrice = customizable ? sum(Math.min, product.price as any) : null;
  const maxPrice = customizable ? sum(Math.max, product.price as any) : null;
  return (
    <Grid
      container
      direction={"column"}
      item
      width="fit-content"
      textAlign={"left"}
      sx={{ gap: "16px", cursor: "pointer" }}
    >
      <Grid item width={{ xs: "336px" }} height={{ xs: "336px" }}>
        <Img src={product.photo} />
      </Grid>
      <Grid item>
        <Typography fontWeight={700} fontSize="16px">
          {product.name}
        </Typography>
      </Grid>
      <Grid
        container
        item
        flexWrap={"nowrap"}
        alignItems="center"
        textAlign={"left"}
      >
        <Grid item xs={6}>
          <Typography fontWeight={600} fontSize="15px">
            {!customizable || minPrice == maxPrice
              ? `$${customizable ? minPrice : product.price}`
              : `$${minPrice} - $${maxPrice}`}
          </Typography>
        </Grid>
        <Grid container item xs={6} sx={{ gap: "6px" }}>
          <Typography fontSize={"14px"}>
            <FormattedMessage id="minimun" />:
          </Typography>
          <Typography fontSize={"14px"} fontWeight="600">
            {product.mininum}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RelatedProduct;
