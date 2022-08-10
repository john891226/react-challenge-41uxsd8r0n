import React, { useContext, useEffect, useState } from "react";
import CartContainerHeader from "./CartContainerHeader";
import Main from "../../layouts/Main";
import CartContainerFooter from "./CartContainerFooter";
import ProductsHeader from "../../components/ProductsHeader";

import { useGlobalContext } from "../../stores/global/GlobalContext";
import { useLoadProducts } from "../../hooks/products";
import { useCartContext } from "../../stores/cart/CartContext";
import CartContainerBody from "./CartContainerBody";
import { IntlContext } from "react-intl";
import {
  Box,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const Search = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  padding-left: 40px;
  border: none;
  outline: none;
  appareance: none;
  color: black;
  font-size: 15px;

  ::placeholder {
    color: black;
    font-size: 15px;
  }
`;

function CartContainer() {
  const global = useGlobalContext();
  const intl = useContext(IntlContext);

  const { loadProductsTypes, loadCartProducts } = useLoadProducts();

  async function preload() {
    global.dispatch({
      type: "SetLoading",
      payload: true,
    });
    await Promise.all([loadProductsTypes(), loadCartProducts()]);
    global.dispatch({
      type: "SetLoading",
      payload: false,
    });
  }

  useEffect(() => {
    preload();
  }, []);

  useEffect(() => {
    loadProductsTypes();
    loadCartProducts();
  }, [intl.locale]);

  const [search, setSearch] = useState("");

  return (
    <Main
      header={
        <CartContainerHeader>
          {
            <Grid
              container
              item
              position={"relative"}
              alignItems="center"
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Search
                type={"text"}
                value={search}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(evt.target.value);
                }}
                placeholder={intl.formatMessage({
                  id: "search_products",
                })}
              />
              <SearchOutlined
                sx={{
                  position: "absolute",
                  left: "10px",
                  zIndex: 9999,
                  color: "dark.01",
                }}
              />
            </Grid>
          }
        </CartContainerHeader>
      }
      footer={<CartContainerFooter />}
    >
      <CartContainerBody />
    </Main>
  );
}

export default CartContainer;
