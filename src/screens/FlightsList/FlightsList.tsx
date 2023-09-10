import { Container, Typography } from "@mui/material";
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { FlightsListTable } from "./FlightsListTable";

function FlightsList() {
  return (
    <Container>
      <Typography variant={"h4"}>List of flights</Typography>
      <ErrorBoundary
        fallback={<Typography>Failed loading flights list</Typography>}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <FlightsListTable />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

export default FlightsList;
