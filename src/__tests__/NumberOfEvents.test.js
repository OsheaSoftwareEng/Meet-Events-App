import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let EventNumber;
  beforeEach(() => {
    EventNumber = render(<NumberOfEvents />);
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
