import { Typography } from "@mui/material";
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { FlightsListTable } from "./FlightsListTable";
import Body from "../../layout/Body";

function FlightsList() {
  return (
    <Body>
      <Typography variant={"h5"} mb={2}>
        List of flights
      </Typography>
      <ErrorBoundary
        fallback={<Typography>Failed loading flights list</Typography>}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <FlightsListTable />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

export default FlightsList;
