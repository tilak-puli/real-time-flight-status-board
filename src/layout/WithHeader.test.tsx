import { render, screen } from "@testing-library/react";

import WithHeader from "./WithHeader";

describe("WithHeader", () => {
  it("render Header", async () => {
    render(WithHeader(<div>Test</div>));
    const element = await screen.findByText(/Flight Status Board/i);
    expect(element).toBeInTheDocument();
  });

  it("render children", async () => {
    render(WithHeader(<div>Test div</div>));
    const element = await screen.findByText(/Test div/i);
    expect(element).toBeInTheDocument();
  });
});
