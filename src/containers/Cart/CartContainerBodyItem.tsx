import styled from "@emotion/styled";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormattedMessage, IntlContext } from "react-intl";
import MenuSelect from "../../components/MenuSelect";
import QuantityMenu from "../../components/QuantityMenu";
import { useCartContext } from "../../stores/cart/CartContext";
import { BasicProduct, CartProduct } from "../../types/products";

interface Props {
  item: CartProduct;
  onRemove?: () => void;
}

const Ul = styled.ul`
  margin-block-start: 0px;
  margin-inline-start: 0px;
  padding-inline-start: 20px;
`;

const ImgBox = styled(Box)`
  width: 120px;
  height: 120px;

  img.singleProduct {
    height: 100%;
    width: 100%;
  }

  position: relative;

  img.packProduct {
    width: 30%;
    height: 30%;
    position: absolute;

    &:first-child {
      left: 10%;
      bottom: 15%;
    }

    &:nth-child(2) {
      left: 50%;
      transform: translateX(-50%);
      top: 15%;
    }

    &:nth-child(3) {
      right: 10%;
      bottom: 15%;
    }
  }
`;

const str = (p: any) => typeof p == "string";

function sum(obj: Record<string, { price: number } | number>): number {
  const res: Record<string, number> = {};
  for (const key in obj) {
    res[key] = typeof obj[key] == "number" ? obj[key] : (obj[key] as any).price;
  }
  return Object.values(res).reduce((acc, n) => acc + n, 0);
}

export const cartItemPrice = (item: CartProduct) =>
  item.pack
    ? item.products.reduce((acc, { prices }) => acc + sum(prices), 0)
    : item.price;

function CartContainerBodyItem({ item, onRemove }: Props) {
  const intl = useContext(IntlContext);
  const cartSt = useCartContext();

  const p = item.pack;

  let cost = cartItemPrice(item);

  return (
    <Grid
      container
      direction="column"
      sx={{
        gap: "24px",
      }}
    >
      <Grid container item sx={{ gap: "16px" }}>
        <Grid
          container
          item
          direction={"column"}
          width={{
            xs: "auto",
            gap: "8px",
          }}
        >
          {p ? (
            <>
              <ImgBox bgcolor="dark.10">
                <img
                  className="packProduct"
                  src={(item.products[0].product as BasicProduct)?.photo}
                />
                {item.products.length > 1 && (
                  <img
                    className="packProduct"
                    src={(item.products[1].product as BasicProduct)?.photo}
                  />
                )}
                {item.products.length > 2 && (
                  <img
                    className="packProduct"
                    src={(item.products[2].product as BasicProduct)?.photo}
                  />
                )}
              </ImgBox>
              <Grid item container justifyContent={"center"}>
                <Box bgcolor={"dark.10"} width="fit-content" p={"4px"}>
                  <Typography fontSize={"10px"} color="dark.06">
                    <FormattedMessage id="pack" />
                  </Typography>
                </Box>
              </Grid>
            </>
          ) : (
            <ImgBox bgcolor="dark.10">
              <img
                className="singleProduct"
                src={(item.product as BasicProduct)?.photo}
              />
            </ImgBox>
          )}
        </Grid>
        <Grid
          container
          item
          xs
          direction={"column"}
          textAlign="left"
          sx={{ gap: "12px" }}
        >
          <Grid container item className="joder">
            <Grid
              container
              item
              direction={"column"}
              textAlign="left"
              sx={{ gap: "12px" }}
              xs
            >
              <Grid item>
                <Typography fontWeight={700} fontSize="18px">
                  {p ? item.name : (item.product as BasicProduct).name}
                </Typography>
              </Grid>
              <Grid item>
                <QuantityMenu
                  value={item.quantity}
                  label={intl.formatMessage({
                    id: "quantity",
                  })}
                  onChange={(q: number) => {
                    cartSt.dispatch({
                      type: "UpdateProductQuantity",
                      payload: {
                        product: item.id,
                        quantity: +q,
                      },
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction={"column"}
              textAlign="right"
              sx={{ gap: "12px" }}
              width="fit-content"
            >
              <Grid item>
                <Typography fontWeight={700} fontSize="18px">
                  ${cost}
                </Typography>
              </Grid>
              <Grid container item sx={{ gap: "10px" }} alignItems="center">
                <Typography fontWeight={500} fontSize="15px">
                  Total:
                </Typography>
                <Typography fontWeight={700} fontSize="18px">
                  ${(cost * item.quantity).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {p ? (
            <>
              <Grid item>
                <Ul>
                  {item.products.map(({ product, prices }) => (
                    <li>
                      <Grid container flexWrap={"wrap"} sx={{ gap: "10px" }}>
                        <Typography fontWeight={600} fontSize="15px">
                          {(product as BasicProduct).name}
                        </Typography>
                        {prices && Object.keys(prices).length > 0 && (
                          <Typography fontWeight={600} color="dark.05">
                            (
                            {Object.values(prices)
                              .map((p) => {
                                return typeof p == "object" ? p.name : p;
                              })
                              .join(", ")}
                            )
                          </Typography>
                        )}
                      </Grid>
                    </li>
                  ))}
                </Ul>
              </Grid>
              <Grid container item sx={{ gap: "10px" }}>
                <Grid item sx={{ cursor: "pointer" }}>
                  <Typography fontWeight={600} fontSize="12px">
                    <FormattedMessage id="edit_pack" />
                  </Typography>
                </Grid>
                <Grid
                  item
                  bgcolor={"dark.01"}
                  sx={{
                    width: "0.5px",
                  }}
                ></Grid>
                <Grid
                  item
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    if (onRemove) onRemove();
                  }}
                >
                  <Typography fontWeight={600} fontSize="12px">
                    <FormattedMessage id="remove" />
                  </Typography>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid
              container
              item
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              width="fit-content"
              onClick={() => {
                if (onRemove) onRemove();
              }}
            >
              <DeleteOutlineOutlined sx={{ fontSize: "16px" }} />
              <Typography fontWeight={600} fontSize="12px">
                <FormattedMessage id="remove" />
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item bgcolor={"dark.09"} height="0.5px" />
    </Grid>
  );
}

export default CartContainerBodyItem;
