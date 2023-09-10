import { render, screen } from "@testing-library/react";

import Todo2 from "./todo2";

describe("Todo 2", () => {
  it("render todo 2 by default", async () => {
    render(<Todo2 />);
    const element = await screen.findByText(/Second Todo/i);
    expect(element).toBeInTheDocument();
  });
});
