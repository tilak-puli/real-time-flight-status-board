import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";

describe("PageNotFound", () => {
  it("render page not found with text", async () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
    );
    const notFoundElement = await screen.findByText(
      /This is not the page you are looking for!/i,
    );
    expect(notFoundElement).toBeInTheDocument();
  });
});
