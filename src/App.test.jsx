import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows the site title and profile links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Joshua Cook" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "gh" })).toHaveAttribute(
      "href",
      "https://github.com/josh-cook"
    );
  });
});
