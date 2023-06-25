import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  it("should mount App component as expected", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });

  it("should sum 1 on button click", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button").textContent).toBe("count is 1");
  });
});
