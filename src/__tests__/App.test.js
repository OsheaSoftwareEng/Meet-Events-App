// src/__tests__/App.test.js

import { render, screen, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<App /> component', () => {
  test('renders list of events', async () => {
    render(<App />);
    expect(screen.getByTestId('events')).toBeInTheDocument();
  });
  //test
  test('render CitySearch', async () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText('Search for a city')
    ).toBeInTheDocument();
  });

  test('renders number of events component', async () => {
    render(<App />);
    expect(screen.getByPlaceholderText('enter a number')).toBeInTheDocument();
  });
});

describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, 'Berlin');
    const berlinSuggestionItem =
      within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole('listitem');

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === 'Berlin, Germany'
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain('Berlin, Germany');
    });
  });
});
