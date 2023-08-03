import Event from '../components/Event';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import mockData from '../mock-date';

const event = mockData;

//tests
describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={event[0]} />);
  });

  test('renders event location', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('renders summary on event', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders created date on event', async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test("show details description shouldn't be displayed until show details is clicked", async () => {
    const allEvents = await getEvents();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    const showDetails = EventComponent.queryByText(allEvents[0].description);
    expect(showDetails).not.toBeInTheDocument();
  });

  test('shows the details and hides details when a user clicks the show details button', async () => {
    const allEvents = await getEvents();
    const user = userEvent.setup();
    EventComponent.rerender(<Event event={allEvents[0]} />);
    const buttonElement = EventComponent.queryByText('Show Details');
    await user.click(buttonElement);
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).toBeInTheDocument();

    await user.click(buttonElement);
    expect(
      EventComponent.queryByText(allEvents[0].description)
    ).not.toBeInTheDocument();
  });
});
