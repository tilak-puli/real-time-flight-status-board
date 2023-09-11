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

export function createFetchDataHook(
  apiCall,
  refreshTime = 5000,
): (...params: any) => Response {
  return (...params) => {
    const [resource, setResource] = useState({
      status: "pending",
    });

    useEffect(() => {
      let intervalId;
      const getData = async () => {
        const promise = apiCall(...params);
        setResource(promiseWrapper(promise));
      };
      getData();

      if (refreshTime) {
        intervalId = setInterval(async () => {
          apiCall()
            .then((res) => {
              setResource({ ...res, updatedOn: Date.now() });
            })
            .catch(() => {
              // noinspection TypeScriptValidateTypes
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
    }, []);

    return resource;
  };
}

export const useGetFlightsList = createFetchDataHook(API.fetchFlights, 5000);
export const useGetFlightDetails = createFetchDataHook(API.fetchFlightDetails);

export interface Response {
  data?: any;
  status: string;
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
