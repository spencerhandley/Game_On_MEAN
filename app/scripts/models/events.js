'use strict';

angular.module('gameonMeanApp').factory('EventsService', function() {
	var events = [
		{
			'eventName' : 'Event',
			'event_ID': 1,
			'stories': []
		},
		{
			'eventName' : 'Event',
			'event_ID': 2,
			'stories': []
		},
		{
			'eventName' : 'Event',
			'event_ID': 3,
			'stories': []
		},
		{
			'eventName' : 'Event',
			'event_ID': 4,
			'stories': []
		}
	];
	var getEvents = function () {
		return events;
	};
	return {
		getEvents: getEvents
	};
});