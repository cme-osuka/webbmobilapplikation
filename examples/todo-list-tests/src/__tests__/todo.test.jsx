import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./../App";

test("can add a todo item", async () => {
  // Arrange
  render(<App />)
  const exampleTodo = "Skriva tester";

  // Act
  await userEvent.type(screen.getByTestId("inputfield"), exampleTodo);
  await userEvent.click(screen.getByText("Submit"))

  // Assert
  expect(screen.getByText(/Skriva tester/i)).toHaveTextContent("Skriva tester (not done)")
})

test("can delete a todoitem", async () => {
  // Arrange
  render(<App />)
  const exampleTodo = "Skriva tester";

  // Act
  await userEvent.type(screen.getByTestId("inputfield"), exampleTodo);
  await userEvent.click(screen.getByText("Submit"))

  await userEvent.click(screen.getByText("x"))

  // Assert
  expect(screen.queryByText(/Skriva tester/i)).toBeNull();
})