import { Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import MenuSelect from "./MenuSelect";

interface Props {
  label: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (n: number) => void;
}

function QuantityMenu({
  label,
  min = 1,
  max = 50,
  value = 1,
  onChange,
}: Props) {
  const options = useMemo(() => {
    const res: number[] = [];
    let c = min;
    while (c <= max) {
      res.push(c);
      c += 4;
    }
    return res;
  }, [min, max]);

  return (
    <Grid container gap="5px">
      <Grid item>
        <Typography fontWeight={600} fontSize="16px">
          <FormattedMessage id="quantity" />:
        </Typography>
      </Grid>
      <Grid item>
        <MenuSelect
          onChange={onChange}
          fontWeight={700}
          fontSize="16px"
          value={value}
        >
          {options.map((v) => (
            <Typography key={v}>{v}</Typography>
          ))}
        </MenuSelect>
      </Grid>
    </Grid>
  );
}

export default QuantityMenu;
