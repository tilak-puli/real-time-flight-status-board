// App.test.js
import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("render todo 1 by default", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const todoElement = await screen.findByText(/First Todo/i);
    expect(todoElement).toBeInTheDocument();
  });

  it("render todo 1 with header by default", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const headerElement = await screen.findByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("render todo 2 on route 2", async () => {
    render(
      <MemoryRouter initialEntries={["/todo-2"]}>
        <App />
      </MemoryRouter>,
    );
    const todoElement = await screen.findByText(/Second Todo/i);
    expect(todoElement).toBeInTheDocument();
  });
});
