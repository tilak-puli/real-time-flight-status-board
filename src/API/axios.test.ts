import axios from "./axios";

describe("Axios", () => {
  it("should have base url", async () => {
    expect(axios.defaults.baseURL).toEqual(
      "https://flight-status-mock.core.travelopia.cloud",
    );
  });
});
