import axiosInstance from "./axios";

const API = {
  fetchFlights: async () => {
    return await axiosInstance.get("/flights");
  },
};

export default API;
