import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badges } from "../Badges";

describe("Badges Component", () => {
  it("should render with default variant", () => {
    render(<Badges data-testid="default">Default Badge</Badges>);
    const badge = screen.getByTestId("default");
    expect(badge.classList.contains("bg-gray-100")).toBe(true);
    expect(badge.classList.contains("text-gray-800")).toBe(true);
  });

  it("should render with yellow variant", () => {
    render(
      <Badges variant="yellow" data-testid="yellow">
        Yellow Badge
      </Badges>,
    );
    const badge = screen.getByTestId("yellow");
    expect(badge.classList.contains("bg-yellow-100")).toBe(true);
    expect(badge.classList.contains("text-yellow-800")).toBe(true);
  });

  it("should render with red variant", () => {
    render(
      <Badges variant="red" data-testid="red">
        Red Badge
      </Badges>,
    );
    const badge = screen.getByTestId("red");
    expect(badge.classList.contains("bg-red-100")).toBe(true);
    expect(badge.classList.contains("text-red-800")).toBe(true);
  });

  it("should render with green variant", () => {
    render(
      <Badges variant="green" data-testid="green">
        Green Badge
      </Badges>,
    );
    const badge = screen.getByTestId("green");
    expect(badge.classList.contains("bg-green-100")).toBe(true);
    expect(badge.classList.contains("text-green-800")).toBe(true);
  });

  it("should render with blue variant", () => {
    render(
      <Badges variant="blue" data-testid="blue">
        Blue Badge
      </Badges>,
    );
    const badge = screen.getByTestId("blue");
    expect(badge.classList.contains("bg-blue-100")).toBe(true);
    expect(badge.classList.contains("text-blue-800")).toBe(true);
  });

  it("should apply additional class names", () => {
    render(
      <Badges className="bg-purple-100" data-testid="extra">
        Badge with Extra Class
      </Badges>,
    );
    const badge = screen.getByTestId("extra");
    expect(badge.classList.contains("bg-purple-100")).toBe(true);
  });
});
