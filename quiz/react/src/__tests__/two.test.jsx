import { test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Two from "./../challenges/Two";

test("Solved Two", () => {
  render(<Two items={["Bedrock", "Graphite", "Flint"]} />);

  const items = screen.getAllByTestId("two-item");

  expect(items[0].textContent).toBe("Bedrock");
  expect(items[1].textContent).toBe("Graphite");
  expect(items[2].textContent).toBe("Flint");
});
