import { useParams } from "react-router-dom";
import Body from "../../layout/Body";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Suspense } from "react";
import { FlightDetailsCard } from "./FlightDetailsCard";
import ErrorCard from "../../components/ErrorCard";
import LoaderAnimation from "../../components/LoaderAnimation";

function FlightDetails() {
  let { id } = useParams();

  if (id === undefined || !Number.isFinite(+id)) {
    return (
      <ErrorCard
        title={"Whoops! Failed to get Flight Details"}
        description={
          "Something went wrong with the link. Please return to the home page to find the flight you wanted."
        }
        actionName={"Back to Home"}
        navigateOnActionTo={"/"}
      />
    );
  }

  return (
    <Body>
      <ErrorBoundary
        fallback={
          <ErrorCard
            title={"Whoops! Failed to get Flight Details"}
            description={
              "Something went wrong while fetching flight Details. Please try again by reloading or returning back to homepage."
            }
            actionName={"Back to Home"}
            navigateOnActionTo={"/"}
          />
        }
      >
        <Suspense fallback={<LoaderAnimation />}>
          <FlightDetailsCard id={+id as number} />
        </Suspense>
      </ErrorBoundary>
    </Body>
  );
}

export default FlightDetails;
