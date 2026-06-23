import { describe, it, expect } from "vitest";
import { render, screen } from "@deijose/nix-js-testing";
import { Hello } from "./Hello";

describe("Hello", () => {
  it("renders a greeting", () => {
    render(new Hello());
    expect(screen.getByText("Hello Nix-Ionic Tabs")).toBeTruthy();
  });
});
