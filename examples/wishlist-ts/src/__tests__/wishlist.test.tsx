import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";
import { WishProvider } from "./../contexts/WishContext";

test("renders", async () => {
  render(
    <WishProvider>
      <App />
    </WishProvider>
  );

  // Hitta inputfältet
  const inputField = await screen.findByPlaceholderText("Lägg till önskning")
  // Skriva i inputfältet
  await userEvent.type(inputField, "En egen måne")
  // Hitta knappen
  const button = await screen.findByText("Lägg till önskning");
  // Klicka på knappen
  await userEvent.click(button)
  
  // Se till att vår önskning lagts till
  expect(screen.queryByText("En egen måne")).toBeDefined();
});
