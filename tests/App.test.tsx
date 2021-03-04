import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import { App } from '../src/App';

describe('App component', () => {
  test('test App component', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Please sign in/)).toBeInTheDocument();
    expect(getByText(/Sign in/)).toBeInTheDocument();

    fireEvent.click(getByText(/Sign in/));
    expect(getByText(/Welcome/)).toBeInTheDocument();
    expect(getByText(/Sign out/)).toBeInTheDocument();

    fireEvent.click(getByText(/Sign out/));
    expect(getByText(/Please sign in/)).toBeInTheDocument();
  });
});
