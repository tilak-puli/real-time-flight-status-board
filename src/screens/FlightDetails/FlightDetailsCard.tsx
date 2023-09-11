import { FlightStatus, useGetFlightDetails } from "../../API/API";
import { FligthStatus, StatusColor } from "./FligthStatus";
import { formatDate, formatTime } from "../../util";
import {
  Card,
  CardContent,
  Container,
  Divider,
  styled,
  Typography,
} from "@mui/material";

export function FlightDetailsCard({ id }) {
  const response = useGetFlightDetails(id);
  const flightDetails = (response.data as FlightStatus) ?? null;

  if (!flightDetails) {
    return <div />;
  }

  return (
    <CardContainer>
      <Card>
        <StyledCardContent>
          <CardTitleContainer>
            <Typography variant={"h6"}>
              {flightDetails.airline} {flightDetails.flightNumber}
            </Typography>
            <FligthStatus status={flightDetails.status} />
          </CardTitleContainer>
          <JourneyContainer>
            <Typography variant={"h5"}>{flightDetails.origin}</Typography>
            <JourneyDivider />
            <Typography variant={"h5"}>{flightDetails.destination}</Typography>
          </JourneyContainer>
          <Container>
            <Typography>{formatDate(flightDetails.departureTime)}</Typography>
            <Typography
              sx={{
                fontSize: 25,
                color: StatusColor[flightDetails.status] || "black",
              }}
            >
              {formatTime(flightDetails.departureTime)}
            </Typography>
          </Container>
        </StyledCardContent>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled(Container)({
  maxWidth: "100em",
});
const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: "2em",
});
const CardTitleContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const JourneyContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const JourneyDivider = styled(Divider)({
  flex: 1,
  margin: 5,
});
