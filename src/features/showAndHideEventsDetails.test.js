import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showAndHideEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An events details are hidden default', ({ given, when, then }) => {
    let AppComponent;
    given('the user opens the application', () => {
      AppComponent = render(<App />);
    });

    when('the user sees a list of events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event details are hidden from that user by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDom = AppDOM.querySelector('#event-list');
      const eventListElements = within(EventListDom).queryAllByRole('listitem');

      await waitFor(() => {
        eventListElements.forEach((eventListElements) => {
          const eventDetails =
            within(eventListElements).queryByTestId('event-details');
          expect(eventDetails).not.toBeInTheDocument();
        });
      });
    });

    test('User can show details by clicking show details button on the event', ({
      given,
      when,
      then
    }) => {
      let AppComponent;
      given('the list of events is displayed', async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(32);
        });
      });
      let showEventDetails;
      when('the user clicks on show details', async () => {
        const user = userEvent.setup();
        const AppDOM = AppComponent.container.firstChild;
        const EventListDom = AppDOM.querySelector('#event-list');
        const eventListElements =
          within(EventListDom).queryAllByRole('listitem');
        const showDetailsButton = within(eventListElements[0]).queryByTestId(
          'details-btn'
        );

        await user.click(showDetailsButton);
        showEventDetails = eventListElements[0];
      });

      then('the event details will be displayed', () => {
        const eventDetails =
          within(showEventDetails).queryByTestId('event-details');
        expect(eventDetails).toBeDefined();
      });

      //Test user can hide the event details
      test('User can hide the event details', ({ given, when, then }) => {
        let AppComponent;
        let showEventDetails;

        given('the user has all the information about an event', async () => {
          //App renders all events
          AppComponent = render(<App />);
          const AppDOM = AppComponent.container.firstChild;
          const EventListDOM = AppDOM.querySelector('#event-list');
          await waitFor(() => {
            const EventListItems =
              within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });

          //user clicks show details on one event
          const user = userEvent.setup();
          // EventListDom = AppDOM.querySelector('#event-list');
          const eventListElements =
            within(EventListDOM).queryAllByRole('listitem');
          const showDetailsButton = within(eventListElements[0]).queryByTestId(
            'details-btn'
          );
          await user.click(showDetailsButton);
        });

        when('the user clicks show details again', async () => {
          const user = userEvent.setup();
          const AppDOM = AppComponent.container.firstChild;
          const EventListDOM = AppDOM.querySelector('#event-list');
          const eventListElements =
            within(EventListDOM).queryAllByRole('listitem');
          const showDetailsButton = within(eventListElements[0]).queryByTestId(
            'details-btn'
          );
          showEventDetails = eventListElements[0];
          await user.click(showDetailsButton);
        });

        then('the event details will be hidden', async () => {
          const eventDetails =
            within(showEventDetails).queryByTestId('event-details');
          expect(eventDetails).not.toBeInTheDocument();
        });
      });
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
