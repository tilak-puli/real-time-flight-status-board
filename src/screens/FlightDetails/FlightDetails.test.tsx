import { render, screen } from "@testing-library/react";

import FlightDetails from "./FlightDetails";

describe("Todo 2", () => {
  it("render todo 2 by default", async () => {
    render(<FlightDetails />);
    const element = await screen.findByText(/Second Todo/i);
    expect(element).toBeInTheDocument();
  });
});
