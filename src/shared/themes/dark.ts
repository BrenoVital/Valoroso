import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
      dark: red[700],
      light: red[300],
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
      contrastText: red[500],
    },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});
