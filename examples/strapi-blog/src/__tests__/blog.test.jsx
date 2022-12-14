import React from "react";
import { test, expect } from "vitest";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./../App";
import data from "./data.json";

const server = setupServer(
  rest.get("http://localhost:1337/api/articles?populate=*", (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen())
afterAll(() => server.close())

test("Renders application", async () => {
  render(<App />);
  //screen.debug()
  const article = {
    title: "En mockad titel",
    email: "mock@test.com",
  };

  const h2element = await screen.findByText(article.title);
  const emailElement = await screen.findByText(article.email, {
    exact: false
  });

  expect(h2element).toBeDefined();
  expect(emailElement).toBeDefined();
});
