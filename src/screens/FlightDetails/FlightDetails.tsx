import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetFlightDetails } from "../../API/API";
import Body from "../../layout/Body";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Suspense } from "react";

function FlightDetails() {
  let { id } = useParams();

  return (
    <Body>
      <Typography variant={"h5"} mb={2}>
        Flight Details
      </Typography>
      <ErrorBoundary
        fallback={<Typography>Failed loading flight details</Typography>}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <FlightDetailsCard id={id} />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

function FlightDetailsCard({ id }) {
  const response = useGetFlightDetails(id);

  return <Paper>{response.data?.flightNumber}</Paper>;
}

export default FlightDetails;
