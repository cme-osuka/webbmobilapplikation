import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Four from './../challenges/Four';


test('Solved Four', () => {
  render(<Four />);

  const text = screen.findByTestId('four-name');

  expect(text.textContent).toBe('My name is: Terry');
  expect(text.textContent).not.toBe('My name is: ');
  expect(text.textContent).not.toBe('My name is: null');
  expect(text.textContent).not.toBe('No user found');
})