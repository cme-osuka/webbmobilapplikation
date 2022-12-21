import { test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import One from "./../challenges/One";

test("Solved One", () => {
  render(<One />)

  const text = screen.getByTestId("one-text");
  const button = screen.getByTestId("one-button");

  fireEvent.click(button);
  expect(text.textContent).toBe("Has been clicked 1 times.")
  
  fireEvent.click(button);
  expect(text.textContent).toBe("Has been clicked 2 times.")
})