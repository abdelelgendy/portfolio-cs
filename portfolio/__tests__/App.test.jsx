import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders main application component', () => {
  render(<App />);
  const linkElement = screen.getByText(/your app text/i);
  expect(linkElement).toBeInTheDocument();
});