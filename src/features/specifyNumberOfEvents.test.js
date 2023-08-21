import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When app is opened the default events number is 32', ({
    given,
    when,
    then
  }) => {
    let AppComponent;
    given('the application is open', () => {
      AppComponent = render(<App />);
    });

    when(
      "the user doesn't specify the number of events in the input box",
      () => {
        const AppDOM = AppComponent.container.firstChild;

        const numberOfEventsDOM = AppDOM.querySelector('#event-number');
        const numberTextBox = within(numberOfEventsDOM).queryByRole('textbox');
      }
    );

    then('the default number is 32', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const numberOfEventsDOM = AppDOM.querySelector('#event-number');
      const numberTextBox = within(numberOfEventsDOM).queryByRole('textbox');
      expect(numberTextBox).toHaveValue('32');
    });

    test('User can change the number of events displayed', ({
      given,
      when,
      then
    }) => {
      let AppComponent;
      given('the application is open', () => {
        AppComponent = render(<App />);
      });

      when(
        'the user types in a number for events to be displayed',
        async () => {
          const AppDOM = AppComponent.container.firstChild;
          const user = userEvent.setup();
          const numberOfEventsDOM = AppDOM.querySelector('#event-number');
          const numberTextBox =
            within(numberOfEventsDOM).queryByRole('textbox');
          await user.click(numberTextBox);
          await userEvent.type(numberTextBox, '{backspace}{backspace}10');
        }
      );

      then(
        'the user should be able to see events equal to number that they inputted',
        async () => {
          const AppDOM = AppComponent.container.firstChild;
          const EventListDOM = AppDOM.querySelector('#event-list');
          await waitFor(() => {
            const EventListItems =
              within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(10);
          });
        }
      );
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
