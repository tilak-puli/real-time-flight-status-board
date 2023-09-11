import axiosInstance from "./axios";
import { useEffect, useState } from "react";
import { promiseWrapper } from "./helper";

const API = {
  fetchFlights: async () => {
    return await axiosInstance.get("/flights");
  },
  fetchFlightDetails: async (id: number) => {
    return await axiosInstance.get(`/flights/${id}`);
  },
};

export function createFetchDataHook(apiCall) {
  return (...params) => {
    const [resource, setResource] = useState({ status: "pending" });

    useEffect(() => {
      const getData = async () => {
        const promise = apiCall(...params);
        setResource(promiseWrapper(promise));
      };

      getData();
    }, []);

    return resource;
  };
}

export const useGetFlightsList = createFetchDataHook(API.fetchFlights);
export const useGetFlightDetails = createFetchDataHook(API.fetchFlightDetails);

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
