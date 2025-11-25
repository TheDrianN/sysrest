"use client";

import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light", // opcional
    primary: {
      main: "#F76F30",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
    background: {
      default: "#FFFCFD",
      paper: "#FFFCFD",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
});
