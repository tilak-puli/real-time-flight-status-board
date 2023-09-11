import { render, screen } from "@testing-library/react";
import FlightsList from "./FlightsList";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import instance from "../../API/axios";

const mock = new MockAdapter(instance);

describe("FlightsList", () => {
  it("render flight list item", async () => {
    const dummyFlights = [
      {
        flightNumber: "123",
        id: 1,
        airline: "airline1",
        origin: "origin1",
        destination: "destination",
        departureTime: "2023-09-11T18:00:51.613Z",
        status: "departed",
      },
    ];
    mock.onGet("/flights").reply(200, dummyFlights);

    render(<FlightsList />, { wrapper: BrowserRouter });

    const airline = await screen.findByText(dummyFlights[0]["airline"]);
    expect(airline).toBeInTheDocument();
  });

  it("render show exception boundary on error", async () => {
    mock.onGet("/flights").reply(400);

    render(<FlightsList />, { wrapper: BrowserRouter });

    const error = await screen.findByText(
      "Something went wrong while fetching flight details. Please retry by reloading.",
    );
    expect(error).toBeInTheDocument();
  });
});
