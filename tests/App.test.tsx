import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from '../src/App';

describe('App component', () => {
  test('render App component', () => {
    render(<App />);

    expect(screen.getByText(/Learn React/)).toBeInTheDocument();
    userEvent.click(screen.getByRole(/link/));
  });
});
