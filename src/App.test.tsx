import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with Main component inside', () => {
  render(<App />);


  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();

});