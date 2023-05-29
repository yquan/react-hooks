import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Demo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Demo/i);
  expect(linkElement).toBeInTheDocument();
});
