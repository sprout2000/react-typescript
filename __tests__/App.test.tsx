import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { App } from '../src/App';

describe('App component', () => {
  test('render App component', () => {
    render(<App />);

    expect(screen.getByRole(/link/)).toHaveTextContent(/Learn React/i);
    expect(screen.getByRole(/link/)).toHaveAttribute(
      'href',
      'https://reactjs.org'
    );
  });
});
