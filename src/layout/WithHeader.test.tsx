import { render, screen } from "@testing-library/react";

import WithHeader from "./WithHeader";
import { BrowserRouter } from "react-router-dom";

describe("WithHeader", () => {
  it("render Header", async () => {
    render(WithHeader(<div>Test</div>), { wrapper: BrowserRouter });
    const element = await screen.findByText(/Flight Status Board/i);
    expect(element).toBeInTheDocument();
  });

  it("render children", async () => {
    render(WithHeader(<div>Test div</div>), { wrapper: BrowserRouter });
    const element = await screen.findByText(/Test div/i);
    expect(element).toBeInTheDocument();
  });
});
