import { Button, Container, Paper, Typography } from "@mui/material";
import Body from "../../layout/Body";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Body>
      <Paper elevation={3} sx={{ m: "auto" }}>
        <Container sx={{ py: 2 }}>
          <Typography variant={"h3"} mb={2} sx={{ textAlign: "center" }}>
            404
          </Typography>
          <Typography variant={"h6"} mb={2} color={grey["700"]}>
            This is not the page you are looking for!
          </Typography>
          <Typography color={grey["700"]}>
            This link may be faulty or the page moved.
          </Typography>
          <Typography mb={2} color={grey["700"]}>
            Return to the main page to find the page you wanted.
          </Typography>
          <Button variant={"contained"} onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Container>
      </Paper>
    </Body>
  );
}

export default PageNotFound;
