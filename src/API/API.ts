import axiosInstance from "./axios";
import { useEffect, useState } from "react";
import { promiseWrapper } from "./helper";
import { AxiosResponse } from "axios";

const API = {
  fetchFlights: async (): Promise<AxiosResponse<FlightStatusDetails[]>> => {
    return await axiosInstance.get("/flights");
  },
  fetchFlightDetails: async (
    id: number,
  ): Promise<AxiosResponse<FlightStatusDetails>> => {
    return await axiosInstance.get(`/flights/${id}`);
  },
};

export function createFetchDataHook(
  // eslint-disable-next-line
  apiCall: (...params: any) => Promise<any>,
  refreshTime = 5000,
  // eslint-disable-next-line
): (...params: any) => {
  lastTriedUpdateTime: string;
  lastUpdateStatus: string;
  updatedOn: number;
  status: string;
  data: any;
} {
  return (...params) => {
    const [resource, setResource] = useState({
      status: "pending",
      lastUpdateStatus: "",
      lastTriedUpdateTime: "",
      updatedOn: 0,
      data: null,
    });

    useEffect(() => {
      let intervalId: any;
      const getData = async () => {
        const promise = apiCall(...params);
        setResource(promiseWrapper(promise));
      };

      getData();

      if (refreshTime) {
        intervalId = setInterval(async () => {
          apiCall()
            .then((res: any) => {
              setResource({ ...res, updatedOn: Date.now() });
            })
            .catch(() => {
              // @ts-ignore
              setResource((previousValue) => ({
                ...previousValue,
                lastUpdateStatus: "error",
                lastTriedUpdateTime: Date.now(),
              }));
            });
        }, refreshTime);
      }

      return () => {
        clearInterval(intervalId);
      };
      // eslint-disable-next-line
    }, []);

    return resource;
  };
}

export const useGetFlightsList = createFetchDataHook(API.fetchFlights, 5000);
export const useGetFlightDetails = createFetchDataHook(API.fetchFlightDetails);

export interface FlightStatusDetails {
  id: Number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export default API;
