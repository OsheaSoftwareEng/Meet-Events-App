Feature: Show/hide an event’s details
	Scenario: An events details are hidden default
		Given the user opens the application
		When the user sees a list of events
		Then the event details are hidden from that user by default

	Scenario: User can show details by clicking show details button on the event
		Given the list of events is displayed
		When the user clicks on show details
		Then the event details will be displayed

	Scenario: User can hide the event details
		Given the user has all the information about an event
		When the user clicks show details again
		Then the event details will be hidden