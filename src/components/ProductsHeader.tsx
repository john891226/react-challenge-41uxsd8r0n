import { Grid } from "@mui/material";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useCartContext } from "../stores/cart/CartContext";
import { useGlobalContext } from "../stores/global/GlobalContext";
import { ProductType } from "../types/products";

interface Props {
  value?: string;
  onChange: (selected: string) => void;
}

function ProductsHeader({ onChange, value = "*" }: Props) {
  const cartStore = useCartContext();

  const products = useMemo((): ProductType[] => {
    return [
      {
        id: "*",
        name: "",
      },
    ].concat(cartStore.state.productsTypes);
  }, [cartStore.state.productsTypes]);

  return (
    <Grid
      container
      bgcolor="dark.10"
      alignItems={"center"}
      sx={{
        height: "64px",
        paddingX: {
          sm: "92px",
        },
        gap: "24px",
        cursor: "pointer",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {products.map((c) => (
        <Grid
          item
          color="dark.04"
          fontSize={"15px"}
          onClick={() => {
            onChange(c.id);
          }}
          {...(value == c.id
            ? {
                fontWeight: 600,
              }
            : {})}
        >
          {c.id == "*" ? <FormattedMessage id="all_products" /> : c.name}
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsHeader;
