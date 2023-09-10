import { render, screen } from "@testing-library/react";
import FlightsList from "./FlightsList";

describe("FlightsList", () => {
  it("render flight list heading", async () => {
    render(<FlightsList />);
    const element = await screen.findByText(/List of flights/i);
    expect(element).toBeInTheDocument();
  });
});
