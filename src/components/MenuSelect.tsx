import { ButtonUnstyled } from "@mui/base";
import {
  ArrowDownward,
  ArrowDownwardOutlined,
  ArrowDropDown,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { AnyARecord } from "dns";
import React, { useState } from "react";

interface Props {
  title?: string;
  children: React.ReactComponentElement<any>[];
  value?: React.ReactNode;
  emptyText?: string;
  onChange?: (v?: any) => void;
  fontSize?: string | number;
  fontWeight?: string | number;
}

function MenuSelect({
  title,
  children,
  value,
  onChange,
  emptyText = "Select",
  ...typo
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (v?: React.ReactComponentElement<any>) => {
    handleClose();
    if (onChange) onChange(v?.key);
  };

  return (
    <Grid container fontSize={"14px"} alignItems="center" sx={{ gap: "3px" }}>
      {title && (
        <Grid item color="dark.04">
          <Typography {...typo}>{title}:</Typography>
        </Grid>
      )}
      <Grid item color={"dark.01"} fontWeight="600" onClick={handleClick}>
        <Grid
          container
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Grid item>
            <Typography {...typo}>{value ? value : emptyText}</Typography>
          </Grid>
          <Grid item alignItems={"center"}>
            <KeyboardArrowDownOutlined
              sx={{ fontSize: "15px", verticalAlign: "middle" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children &&
          children.map((c, i) => (
            <MenuItem
              key={i}
              onClick={() => {
                handleSelect(c);
              }}
            >
              <Typography {...typo}>{c}</Typography>
            </MenuItem>
          ))}
      </Menu>
    </Grid>
  );
}

export default MenuSelect;
