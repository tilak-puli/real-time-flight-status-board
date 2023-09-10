import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Todo() {
  return (
    <div>
      <Typography variant={"h1"}>First Todo</Typography>
      <Link to={"todo-2"}>Go to todo 2</Link>
    </div>
  );
}

export default Todo;
