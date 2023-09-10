import API from "./API";
import instance from "./axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(instance, { delayResponse: 100 });

describe("API", () => {
  it("should fetch flights list", async () => {
    const dummyFlights = [{ flight: 1 }];
    mock.onGet("/flights").reply(200, dummyFlights);

    const res = await API.fetchFlights();
    expect(res.status).toEqual(200);
    expect(res.data).toEqual(dummyFlights);
  });
});
