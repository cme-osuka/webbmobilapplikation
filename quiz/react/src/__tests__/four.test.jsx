import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Four from "./../challenges/Four";

test("Solved Four", async () => {
  render(<Four />);

  const loading = screen.getByTestId("four-loading");
  expect(loading.textContent).toBe("Loading...");

  const text = await screen.findByTestId("four-name");
  expect(text.textContent).toBe("My name is: Terry");
  expect(text.textContent).not.toBe("My name is: ");
  expect(text.textContent).not.toBe("No user found");
});
