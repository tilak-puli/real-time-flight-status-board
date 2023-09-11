import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Body from "../../layout/Body";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Suspense } from "react";
import { FlightDetailsCard } from "./FlightDetailsCard";

function FlightDetails() {
  let { id } = useParams();

  if (id === undefined || !Number.isFinite(id)) {
    return <Body>Invalid Id provided in the URL</Body>;
  }

  return (
    <Body>
      <Typography variant={"h5"} mb={2}>
        Flight Details
      </Typography>
      <ErrorBoundary
        fallback={<Typography>Failed loading flight details</Typography>}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <FlightDetailsCard id={+id as number} />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

export default FlightDetails;
