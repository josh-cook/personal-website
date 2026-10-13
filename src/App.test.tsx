import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("shows the portfolio sections and existing destinations", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Joshua Cook" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A little bit of everything." })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Curiosity first. Everything else follows.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Development/ })
    ).toHaveAttribute("href", "https://github.com/josh-cook");
    expect(
      screen.getByRole("link", { name: /Game design/ })
    ).toHaveAttribute(
      "href",
      "https://josh-cook.github.io/challenge-generator/"
    );
    expect(
      screen.getByRole("link", { name: /Bass & music/ })
    ).toHaveAttribute(
      "href",
      "https://soundcloud.com/user-231579091/sets/band-songs-1"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/josh-cook"
    );
    expect(screen.getAllByRole("link", { name: "LinkedIn" })[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/joshua-c-95b61625/"
    );
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/joshua-c-95b61625/"
    );
    expect(screen.getByRole("link", { name: "Menu" })).toHaveAttribute(
      "href",
      "#capabilities"
    );
  });
});
