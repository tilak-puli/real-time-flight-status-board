import { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import { FlightsListTable } from "./FlightsListTable";
import Body from "../../layout/Body";
import ErrorCard from "../../components/ErrorCard";
import LoaderAnimation from "../../components/LoaderAnimation";
import { Strings } from "../../locales/English";

function FlightsList() {
  return (
    <Body>
      <ErrorBoundary
        fallback={
          <ErrorCard
            title={Strings.FlightsListPage.ErrorBoundary.Title}
            description={Strings.FlightsListPage.ErrorBoundary.Description}
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
