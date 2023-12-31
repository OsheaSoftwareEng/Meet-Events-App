# Meet-Events-App

**Link to project:** https://osheasoftwareeng.github.io/Meet-Events-App/ <br>

![alt tag](https://imgur.com/N8lxMvQ.png)

## How It's Made:

**Tech used:** HTML5, CSS, JavaScript, React, Amazon Web Services

**An app for users to find tech events around them to enjoy**

## How this app uses serverless functions

Anytime this app interacts with the Google Calender API, it will have to use serverless functions in order to serve the necessary data to the user. An example would be if the user wants to filter events it would trigger a serverless functions to interact with the API to display the data their requesting. Another example would be when a user wants to see the data from the API being displayed on a chart. This would also cause a serverless functions to occur resulting in the data being fetched and displayed on the graph.

## Feature 1 : filter events by city

**User story:** as a user I should be able to filter events by city so I can target specific events depending on where I live

_Scenario 1:_ when a user hasn’t specified any city </br>
Given: user hasn’t searched for any city </br>
When: the user open the app. </br>
Then: all events from all cities are shown. </br>

_Scenario 2:_ user has chosen his selected city. </br>
Given: the main page is open. </br>
When: user types in his city. </br>
Then: all the events from the users city is displayed to the user. </br>

_Scenario 3:_ user wants to choose a city he might visit to see what events are going on. </br>
Given: the main page is open. </br>
When: user puts types in the city. </br>
Then: the user sees all the events corresponding with that city the user typed. </br>

## Feature 2: show and hide event details

**User story:** as a user I should be able to show and hide details about an event by toggling a button.

_Scenario 1:_ an event is only showing a little bit of information by default. </br>
Given: the events are loaded. </br>
When: a user clicks show more details button on the event. </br>
Then: the event expands and shows the rest of the information. </br>

_Scenario 2:_ user has clicked show details and now wants to show less details to scroll quicker. </br>
Given: the events are loaded. </br>
When: user clicks hide details button at the button of the event. </br>
Then: the event hides the additional information about the selected event. </br>

_Scenario 3:_ an event element is not showing all the details by default. </br>
Given: the app is loaded. </br>
When: a list of events are displayed in front of the user. </br>
Then: the user sees all the story but not all the full details of each event. </br>

## Feature 3: Specify number of events

**User story:** as a user, I should be able to specify how many events I want to see so I can see as many as I want or as few as I want. </br>
_Scenario 1:_ when a user first loads into the app and hasn’t specified his events. </br>
Given: the app is loaded </br>
When: the users hasn’t specified the number of events. </br>
Then: a default list of 10 events will be displayed on the page. </br>

_Scenario 2:_ when a user wants to change the events shown to a higher number of events. </br>
Given: the default of 10 events is displayed to the user. </br>
When: the user specifies a higher number of events than the default. </br>
Then: the page updates the list and new events are displayed to the user. </br>

_Scenario 3:_ when a user wants to change the events to show less than the default number of events. </br>
Given: the app is loaded and events are displayed to the user. </br>
When: the user specifies a lower number of events to be shown to the user. </br>
Then: the page updates with a shorter list of events being displayed as specified. </br>

## Feature 4: Use the app when offline

**User story:** as a user, I want to be able to look at events I’ve already searched when offline </br>
_Scenario 1:_ show cached data when there’s no internet </br>
Given: there’s no internet connection </br>
When: user goes to previously viewed events </br>
Then: the events will still show up to the user since they’re cached. </br>

_Scenario 2:_ display error when user changes any filter settings(city, time, filter etc) </br>
Given: there’s no internet connection. </br>
When: the user changes his settings. </br>
Then: app displays no internet message. </br>

## Feature 5: Display charts visualizing event details

**User story:** as a user, I should be able to see the number of events in a city. </br>
_Scenario 1:_ a chart is displayed with the number of upcoming events in each city. </br>
Given: the app is loaded. </br>
When: when a user clicks a city </br>
Then: a chart is then displayed with the number of events in a city and is shown to the user.
