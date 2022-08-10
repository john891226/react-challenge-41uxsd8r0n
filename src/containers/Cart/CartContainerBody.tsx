import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import LoadingBounce from "../../components/LoadingBounce";
import ProductsHeader from "../../components/ProductsHeader";
import RelatedProduct from "../../components/RelatedProduct";
import { useLoadProducts } from "../../hooks/products";
import { useCartContext } from "../../stores/cart/CartContext";
import { Page } from "../../types/pagination";
import { CartProduct, Product } from "../../types/products";
import CartContainerBodyItem, { cartItemPrice } from "./CartContainerBodyItem";

function CartContainerBody() {
  const cartStore = useCartContext();
  const { getRelatedProducts } = useLoadProducts();

  function onProductTypeSelected(p: string) {
    cartStore.dispatch({
      type: "SetSelectedProductType",
      payload: p,
    });
  }

  const cartTotal = cartStore.state.cart
    .map((p) => cartItemPrice(p) * p.quantity)
    .reduce((acc, p) => acc + p, 0)
    .toFixed(2);

  const onItemRemove = (p: CartProduct, index: number) => {
    cartStore.dispatch({
      type: "RemoveProductFromCart",
      payload: p.id,
    });
  };

  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState<Page<Product>>({
    data: [],
    page: 0,
    page_size: 5,
    total: -1,
  });

  useEffect(() => {
    setLoadingRelatedProducts(true);
    getRelatedProducts()
      .then(setRelatedProducts)
      .finally(() => {
        console.log(relatedProducts);
        setLoadingRelatedProducts(true);
      });
  }, [cartStore.state.cart]);

  const emptyCart = cartStore.state.cart.length == 0;

  return (
    <Grid
      container
      bgcolor="white"
      direction={"column"}
      sx={{
        minHeight: "200px",
        gap: "10px",
        paddingBottom: {
          xs: "100px",
        },
      }}
      height="100%"
    >
      <ProductsHeader
        onChange={onProductTypeSelected}
        value={cartStore.state.productCategory}
      />
      <Grid
        container
        item
        xs
        sx={{
          gap: "24px",
          paddingTop: {
            xs: "10px",
            sm: "30px",
          },
          paddingBottom: {
            xs: "10px",
          },
          paddingX: {
            xs: "20px",
            sm: "92px",
          },
        }}
      >
        <Grid
          item
          container
          xs
          direction="column"
          sx={{
            gap: "40px",
          }}
        >
          <Grid container item alignItems={"center"} sx={{ gap: "8px" }}>
            <Typography
              fontWeight={700}
              fontSize="24px"
              color="dark.01"
              textAlign="left"
            >
              <FormattedMessage id="my_cart" />
            </Typography>
            <Typography color="dark.05" fontSize="20px" mt="3px">
              ({cartStore.state.cart.length})
            </Typography>
          </Grid>
          <Grid container item direction={"column"} sx={{ gap: "24px" }}>
            {emptyCart ? (
              <Grid
                item
                container
                justifyContent={"center"}
                alignItems="center"
              >
                <Typography fontWeight={700} fontSize="24px" color="dark.09">
                  <FormattedMessage id="empty" />
                </Typography>
              </Grid>
            ) : (
              cartStore.state.cart.map((p, i) => (
                <Grid item>
                  <CartContainerBodyItem
                    item={p}
                    onRemove={() => {
                      onItemRemove(p, i);
                    }}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={4}
          direction="column"
          sx={{
            textAlign: "left",
            gap: "10px",
          }}
        >
          <Typography fontWeight={700} fontSize="24px">
            <FormattedMessage id="order_summary" />
          </Typography>
          <Grid container item fontSize="16px" color="dark.05">
            <Grid item xs>
              <Typography>
                <FormattedMessage id="cart_number_of_items" />
              </Typography>
            </Grid>
            <Grid item width={"15px"} textAlign="right">
              <Typography>{cartStore.state.cart.length}</Typography>
            </Grid>
          </Grid>
          <Grid item bgcolor="dark.05" height="0.5px" />
          <Grid container item alignItems={"center"}>
            <Grid item xs>
              <Typography fontSize="18px" fontWeight="600">
                Total:
              </Typography>
            </Grid>
            <Grid item width="auto" textAlign="right">
              <Typography fontWeight={700} fontSize="24px">
                ${cartTotal}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item sx={{ gap: "10px" }}>
            <Button
              variant="contained"
              fullWidth
              autoCapitalize="false"
              disabled={emptyCart}
            >
              <FormattedMessage id="proceed_to_checkout" />
            </Button>
            <Button variant="outlined" fullWidth>
              <FormattedMessage id="continue_shooping" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        position={"relative"}
        sx={{
          gap: "24px",
          paddingTop: {
            xs: "40px",
          },
          paddingX: {
            xs: "20px",
            sm: "92px",
          },
        }}
      >
        <Grid item textAlign={"left"}>
          <Typography fontWeight={700} fontSize="24px">
            <FormattedMessage id="another_products" />
          </Typography>
        </Grid>
        <Grid item sx={{ overflowX: "auto", width: "100%" }}>
          <Box display={"inline-flex"} sx={{ float: "left", gap: "16px" }}>
            {relatedProducts.data.map((p) => (
              <RelatedProduct product={p} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartContainerBody;
