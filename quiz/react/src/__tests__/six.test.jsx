import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Six from './../challenges/Six';

test('Solved Six', () => {
  render(<Six />);

  const text = screen.findByTestId('six-text');
  const firstNameInput = screen.findByTestId('six-firstName');
  const lastNameInput = screen.findByTestId('six-lastName');

  expect(text.textContent).toBe('My name is: ');

  fireEvent.change(firstNameInput, { target: { value: "Oscar" } });
  fireEvent.change(lastNameInput, { target: { value: "Nilsson" } });

  expect(text.textContent).toBe('My name is: Oscar Nilsson');
  expect(text.textContent).not.toBe('My name is: OscarNilsson');
  expect(text.textContent).not.toBe('My name is: ');
  expect(text.textContent).not.toBe('My name is: null');
})