import { Button, Container, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  actionName?: string;
  navigateOnActionTo?: string;
}

function ErrorCard({
  title,
  description,
  actionName,
  navigateOnActionTo,
}: Props) {
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ m: "auto", maxWidth: 500, py: 2 }}>
      <Container sx={{ py: 2, textAlign: "left" }}>
        <Typography variant={"h5"} mb={2}>
          {title}
        </Typography>
        <Typography mb={2} color={grey["800"]}>
          {description}
        </Typography>
        {actionName && navigateOnActionTo && (
          <Button
            variant={"contained"}
            onClick={() => navigate(navigateOnActionTo)}
          >
            {actionName}
          </Button>
        )}
      </Container>
    </Paper>
  );
}

export default ErrorCard;
