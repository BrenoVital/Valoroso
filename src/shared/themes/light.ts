import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#000",
      dark: "#000",
      light: "#000",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
  },
});
