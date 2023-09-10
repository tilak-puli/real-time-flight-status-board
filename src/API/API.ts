import axiosInstance from "./axios";
import { useEffect, useState } from "react";
import { promiseWrapper } from "./helper";

const API = {
  fetchFlights: async () => {
    return await axiosInstance.get("/flights");
  },
};

export function useGetFlightsList() {
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

export interface FlightStatus {
  id: Number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export default API;
