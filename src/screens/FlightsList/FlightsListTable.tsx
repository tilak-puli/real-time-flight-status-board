import { useEffect, useState } from "react";
import API from "../../API/API";
import { Container, Typography } from "@mui/material";
import { promiseWrapper } from "../../API/helper";

interface FlightStatus {
  id: Number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

function useGetFlightsList() {
  const [resource, setResource] = useState({ status: "pending" });

  useEffect(() => {
    const getData = async () => {
      const promise = API.fetchFlights();
      setResource(promiseWrapper(promise));
    };

    getData();
  }, []);

  return resource;
}

export function FlightsListTable() {
  let flightsList = useGetFlightsList();

  return (
    <Typography variant={"h6"}>
      {flightsList.data?.map((flight: FlightStatus) => (
        <Container>
          <Typography>{flight.flightNumber}</Typography>
          <Typography>{flight.airline}</Typography>
          <Typography>{flight.origin}</Typography>
          <Typography>{flight.destination}</Typography>
          <Typography>{flight.departureTime}</Typography>
          <Typography>{flight.status}</Typography>
        </Container>
      ))}
    </Typography>
  );
}
