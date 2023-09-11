import { styled, Typography } from "@mui/material";
import { green, grey, orange, red } from "@mui/material/colors";

export const StatusColor: { [status: string]: string } = {
  "On Time": green["700"],
  Delayed: orange["700"],
  Boarding: orange["700"],
  Departed: red["400"],
};

interface Props {
  status: string;
}
export function FlightStatus({ status }: Props) {
  return (
    <StyledTypography status={status} px={1}>
      {status}
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)((props: { status: string }) => ({
  backgroundColor: StatusColor[props.status] || grey["800"],
  color: "white",
  borderRadius: "2px",
  width: 80,
  textAlign: "center",
}));