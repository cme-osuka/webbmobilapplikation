import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Three from "./../challenges/Three";

test("Solved Three", () => {
  render(<Three items={["Bedrock", 1, "Graphite", 2, "Flint", 3]} />);

  const items = screen.getAllByTestId("three-item");
  const faultyItems = screen.queryAllByTestId("three-faulty-item");

  expect(items[0].textContent).toBe("1");
  expect(items[1].textContent).toBe("2");
  expect(items[2].textContent).toBe("3");

  expect(faultyItems.length).toBe(0);
});