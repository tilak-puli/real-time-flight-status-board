import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { FlightsListTable } from "./FlightsListTable";
import Body from "../../layout/Body";
import ErrorCard from "../../components/ErrorCard";
import LoaderAnimation from "../../components/LoaderAnimation";

function FlightsList() {
  return (
    <Body>
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
        <Suspense fallback={<LoaderAnimation />}>
          <FlightsListTable />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

export default FlightsList;
