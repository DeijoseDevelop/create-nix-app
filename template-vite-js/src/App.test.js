import { describe, it, expect } from "vitest";
import { render, screen } from "@deijose/nix-js-testing";
import { html } from "@deijose/nix-js";

function Hello() {
  return html`<div><h1>Hello Nix.js</h1></div>`;
}

describe("Hello", () => {
  it("renders a greeting", () => {
    render(Hello());
    expect(screen.getByText("Hello Nix.js")).toBeTruthy();
  });
});
