import { test, expect  } from 'vitest';
import { render, screen } from '@testing-library/react';
import Five from './../challenges/Five';

test('Solved Five', async () => {
  render(<Five />);

  expect(await (await screen.findByTestId("five-count")).textContent).toBe("1")
})