
Feature: Specify number of events
	Scenario: When app is opened the default events number is 32
		Given the application is open
		When the user doesn't specify the number of events in the input box
		Then the default number is 32

	Scenario: User can change the number of events displayed
		Given the application is open
		When the user types in a number for events to be displayed
		Then the user should be able to see events equal to number that they inputted