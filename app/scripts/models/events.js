'use strict';
var app = angular.module('gameonMeanApp')

app.factory('EventsService', function() {
	var events = [
		{
			'eventName' : 'Event',
			'event_ID': 1,
			'stories': [
				{id: 1,
				event_ID: 1,
				headline: 'Event 1 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 2,
				event_ID: 1,
				headline: 'Event 1 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 3,
				event_ID: 1,
				headline: 'Event 1 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 4,
				event_ID: 1,
				headline: 'Event 1 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 5,
				event_ID: 1,
				headline: 'Event 1 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
			]
		},
		{
			'eventName' : 'Event',
			'event_ID': 2,
			'stories': [
				{id: 6,
				event_ID: 2,
				headline: 'Event 2 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 7,
				event_ID: 2,
				headline: 'Event 2 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 8,
				event_ID: 2,
				headline: 'Event 2 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 9,
				event_ID: 2,
				headline: 'Event 2 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 10,
				event_ID: 2,
				headline: 'Event 2 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
			]		},
		{
			'eventName' : 'Event',
			'event_ID': 3,
			'stories': [
				{id: 11,
				event_ID: 3,
				headline: 'Event 3 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 12,
				event_ID: 3,
				headline: 'Event 3 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 13,
				event_ID: 3,
				headline: 'Event 3 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 14,
				event_ID: 3,
				headline: 'Event 3 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 15,
				event_ID: 3,
				headline: 'Event 3 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
			]		},
		{
			'eventName' : 'Event',
			'event_ID': 4,
			'stories': [
				{id: 16,
				event_ID: 4,
				headline: 'Event 4 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 17,
				event_ID: 4,
				headline: 'Event 4 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 18,
				event_ID: 4,
				headline: 'Event 4 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 19,
				event_ID: 4,
				headline: 'Event 4 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
				{id: 20,
				event_ID: 4,
				headline: 'Event 4 headline',
				body: 'this is a body',
				type:'article',
				source: 'Twitter Handle'},
			]		}
	];
	var getEvents = function () {
		return events; 
	};

	var getArticles = function () {
		var stories = []
		events.forEach(function (event) {
			event.stories.forEach(function (story) {
				stories.push(story)
			})
		})
		return stories
	}
	var deleteArticle = function (id) {
		for(var i = 0; i < events.length; i++) {
			var article =  _.findWhere(events[i].stories, {id: id})
			events[i].stories.remove(article)
		}
		// events
		// remove(function(s) {
		// 	return s.id == id;
		// })
	}
	var insertArticle = function (article, evtId) {
		console.log(evtId)
		var chosenEvent = _.findWhere(events, {event_ID: Number(evtId)})
		console.log(chosenEvent)
		chosenEvent.stories.push(article)
	}

	var insertArticleAfter = function (current) {

	}
	return {
		getArticles: getArticles,
		insertArticle: insertArticle,
		getEvents: getEvents,
		insertArticleAfter: insertArticleAfter,
		deleteArticle: deleteArticle
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

