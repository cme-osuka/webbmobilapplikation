import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Six from './../challenges/Six';

test('Solved Six', () => {
  render(<Six />);

  const text = screen.getByTestId('six-text');
  const firstNameInput = screen.getByTestId('six-firstName');
  const lastNameInput = screen.getByTestId('six-lastName');

  expect(text.textContent).toBe('Hi, my name is:  ');

  fireEvent.change(firstNameInput, { target: { value: "Oscar" } });
  fireEvent.change(lastNameInput, { target: { value: "Nilsson" } });

  expect(text.textContent).toBe('Hi, my name is: Oscar Nilsson');
  expect(text.textContent).not.toBe('Hi, my name is: OscarNilsson');
  expect(text.textContent).not.toBe('Hi, my name is: ');
  expect(text.textContent).not.toBe('Hi, my name is: null');
})