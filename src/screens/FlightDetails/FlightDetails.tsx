import { useParams } from "react-router-dom";
import Body from "../../layout/Body";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Suspense } from "react";
import { FlightDetailsCard } from "./FlightDetailsCard";
import ErrorCard from "../../components/ErrorCard";
import LoaderAnimation from "../../components/LoaderAnimation";
import { Strings } from "../../locales/English";

function FlightDetails() {
  let { id } = useParams();

  if (id === undefined || !Number.isFinite(+id)) {
    return (
      <ErrorCard
        title={Strings.FlightsDetailsPage.IdErrorBoundary.Title}
        description={Strings.FlightsDetailsPage.IdErrorBoundary.Description}
        actionName={Strings.FlightsDetailsPage.IdErrorBoundary.ActionsName}
        navigateOnActionTo={"/"}
      />
    );
  }

  return (
    <Body>
      <ErrorBoundary
        fallback={
          <ErrorCard
            title={Strings.FlightsDetailsPage.ErrorBoundary.Title}
            description={Strings.FlightsDetailsPage.ErrorBoundary.Description}
            actionName={Strings.FlightsDetailsPage.ErrorBoundary.ActionsName}
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
