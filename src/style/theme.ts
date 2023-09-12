// @ts-ignore
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#175274",
    },
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
