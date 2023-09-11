import { styled, Typography } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";

const StatusColor = {
  "On Time": green["700"],
  Delayed: orange["700"],
  Boarding: orange["700"],
  Departed: red["400"],
};

export function FligthStatus({ status }) {
  return (
    <StyledTypography status={status} px={1}>
      {status}
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)((props) => ({
  backgroundColor: StatusColor[props.status] || grey["800"],
  color: "white",
  borderRadius: "2px",
  width: 80,
  textAlign: "center",
}));
