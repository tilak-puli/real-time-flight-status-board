// App.test.js
import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("render flight list by default", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const todoElement = await screen.findByText(/List of flights/i);
    expect(todoElement).toBeInTheDocument();
  });

  it("render todo 2 on route 2", async () => {
    render(
      <MemoryRouter initialEntries={["/todo-2"]}>
        <App />
      </MemoryRouter>,
    );
    const todoElement = await screen.findByText(/Second todo/i);
    expect(todoElement).toBeInTheDocument();
  });
});
