import renderer from "react-test-renderer";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import instance from "./API/axios";
const mock = new MockAdapter(instance);

describe("App", () => {
  it("renders flight list by default", () => {
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

    const tree = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
