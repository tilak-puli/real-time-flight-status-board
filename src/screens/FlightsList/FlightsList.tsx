import { Container, Skeleton, Typography } from "@mui/material";
import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { FlightsListTable } from "./FlightsListTable";
import Body from "../../layout/Body";
import ErrorCard from "../../components/ErrorCard";

function FlightsList() {
  return (
    <Body>
      <Typography variant={"h5"} mb={2}>
        List of flights
      </Typography>
      <ErrorBoundary
        fallback={
          <ErrorCard
            title={"Whoops! Failed to get Flight Details"}
            description={
              "Something went wrong while fetching flight details. Please retry by reloading."
            }
          />
        }
      >
        <Suspense fallback={<FlightsTableSkeleton />}>
          <FlightsListTable />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

function FlightsTableSkeleton() {
  return (
    <Container sx={{ marginTop: 5 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
        <Skeleton
          variant="rectangular"
          width={"70vw"}
          height={50}
          sx={{ marginBottom: "2px" }}
          animation={"wave"}
        />
      ))}
    </Container>
  );
}

export default FlightsList;
