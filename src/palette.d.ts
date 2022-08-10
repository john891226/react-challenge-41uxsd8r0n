import { PaletteColorOptions, PaletteOptions as PO } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions extends PO {
    dark: Record<string, string>;
  }
}
