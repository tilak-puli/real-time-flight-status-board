import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AirlinesIcon from "@mui/icons-material/Airlines";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ ml: 5, display: "flex" }}>
        <Link to={"/"}>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "white", justifyContent: "center" }}
          >
            <AirlinesIcon fontSize={"large"} sx={{ mr: 1 }} />
            Flight Status Board
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
