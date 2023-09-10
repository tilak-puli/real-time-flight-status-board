import { render, screen } from "@testing-library/react";

import Todo from "./todo";
import { BrowserRouter } from "react-router-dom";

describe("Todo 1", () => {
  it("render todo 1 by default", async () => {
    render(<Todo />, { wrapper: BrowserRouter });
    const element = await screen.findByText(/First Todo/i);
    expect(element).toBeInTheDocument();
  });
});
