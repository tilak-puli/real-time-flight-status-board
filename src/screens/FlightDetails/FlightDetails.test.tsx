import { render, screen } from "@testing-library/react";

import FlightDetails from "./FlightDetails";
import MockAdapter from "axios-mock-adapter";
import instance from "../../API/axios";
import { MemoryRouter } from "react-router-dom";
const mock = new MockAdapter(instance);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "2",
  }),
}));

describe("Flight Details", () => {
  it("render flight details card by default", async () => {
    const dummyFlight = {
      flightNumber: "123",
      id: 2,
      airline: "airline1",
      origin: "origin1",
      destination: "destination",
      departureTime: "2023-09-11T18:00:51.613Z",
      status: "departed",
    };
    mock.onGet("/flights/2").reply(200, dummyFlight);

    render(
      <MemoryRouter initialEntries={["/flight-details/2"]}>
        <FlightDetails />
      </MemoryRouter>,
    );
    const element = await screen.findByText(/origin1/i);
    expect(element).toBeInTheDocument();
  });

  it("render flight details card error card on 400", async () => {
    mock.onGet("/flights/2").reply(400);

    render(
      <MemoryRouter initialEntries={["/flight-details/2"]}>
        <FlightDetails />
      </MemoryRouter>,
    );

    const error = await screen.findByText(
      "Something went wrong while fetching flight Details. Please try again by reloading or returning back to homepage.",
    );
    expect(error).toBeInTheDocument();
  });
});
