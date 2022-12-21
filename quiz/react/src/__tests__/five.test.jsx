import { test, expect  } from 'vitest';
import { render, screen } from '@testing-library/react';
import Five from './../challenges/Five';

test('Solved Five', () => {
  render(<Five />);

  expect(screen.findByTestId("five-count")).toHaveTextContent("1");
})