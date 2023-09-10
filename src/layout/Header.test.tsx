import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("render web site name", async () => {
    render(<Header />);
    const element = await screen.findByText(/Flight Status Board/i);
    expect(element).toBeInTheDocument();
  });
});
