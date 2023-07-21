// src/__tests__/App.test.js

import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  test('renders list of events', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByTestId('events')).toBeInTheDocument();
    });
  });

  test('render CitySearch', async () => {
    render(<App />);
    await waitFor(() => {
      expect(
        screen.getByPlaceholderText('Search for a city')
      ).toBeInTheDocument();
    });
  });

  test('renders number of events component', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByPlaceholderText('enter a number')).toBeInTheDocument();
    });
  });
});
