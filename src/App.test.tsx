// App.test.js
import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import instance from "./API/axios";

const mock = new MockAdapter(instance);

describe("App", () => {
  it("render flight list by default", async () => {
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

    render(<App />, { wrapper: BrowserRouter });
    const heading = await screen.findByText(/List of flights/i);
    expect(heading).toBeInTheDocument();
  });

  it("render flight details on flight details route", async () => {
    const dummyFlightDetails = {
      flightNumber: "123",
      id: 1,
      airline: "airline1",
      origin: "origin1",
      destination: "destination",
      departureTime: "2023-09-11T18:00:51.613Z",
      status: "departed",
    };

    mock.onGet("/flights/1").reply(200, dummyFlightDetails);

    render(
      <MemoryRouter initialEntries={["/flight-details/1"]}>
        <App />
      </MemoryRouter>,
    );
    const airlineElement = await screen.findByText(/airline1/i);
    expect(airlineElement).toBeInTheDocument();
  });
});
