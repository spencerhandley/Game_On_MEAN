'use strict';
var app = angular.module('gameonMeanApp')

app.factory('EventsService', function() {
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
app.config(function ( $httpProvider) {        
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
app.factory('events', function () {
        return{          
            get: function() {
                $.ajax({
				     url:"https://s3.amazonaws.com/com.gameontechnology.data/events/World-Championship.json",
				     dataType: 'jsonp',
				})
            }        
        }
});


// app.factory('events', function($http) {
// 	return {
// 		get: function () {
// 			$http.get('https://s3.amazonaws.com/com.gameontechnology.data/events/World-Championship.json')
// 		}
// 	} 

// 	// $resource('https://s3.amazonaws.com/com.gameontechnology.data/events/World-Championship.json')
// })

