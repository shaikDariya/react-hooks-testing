import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./";

describe("Counter Component", () => {
  it("Counter loads with initial state of 0", () => {
    const { container } = render(<Counter />);
    const countValue = container.querySelector("p").textContent;
    expect(countValue).toBe("Current: 0 - Previous: ");
  });
  it("Random Increment button work", () => {
    const { container, getByText } = render(<Counter />);
    const incrementButton = getByText("Random Increment");
    fireEvent.click(incrementButton);
    const countValue = container.querySelectorAll("p")[0].textContent;
    expect(countValue).not.toBe("Current: 0 - Previous: ");
  });
});
