import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Link to={"/"}>
          <Typography variant="h6" component="div" sx={{ color: "white" }}>
            Flight Status Board
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
