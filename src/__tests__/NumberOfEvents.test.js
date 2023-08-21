import NumberOfEvents from '../components/NumberOfEvents';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
  let EventNumber;
  beforeEach(() => {
    EventNumber = render(
      <NumberOfEvents setErrorAlert={() => {}} setCurrentNOE={() => {}} />
    );
  });

  test('checking to see if the textbox is rendering correctly', () => {
    expect(EventNumber.queryByRole('textbox')).toBeInTheDocument();
  });

  test('checking if default value of the input box is 32', () => {
    expect(EventNumber.queryByRole('textbox')).toHaveValue('32');
  });

  test('user can change number of events in textbox', async () => {
    const textBox = EventNumber.queryByRole('textbox');

    await userEvent.type(textBox, '{backspace}{backspace}10');
    expect(EventNumber.queryByRole('textbox')).toHaveValue('10');
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('renders a new number of events based on what the user types as a number.', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const numberOfEventsDOM = AppDOM.querySelector('#event-number');
    const numberTextBox = within(numberOfEventsDOM).queryByRole('textbox');
    await user.click(numberTextBox);
    await userEvent.type(numberTextBox, '{backspace}{backspace}10');

    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(10);
    });
  });
});

const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});
