'use strict';
(function(){


	var app = angular.module('gameonMeanApp', ['ui.router']);
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.state('home.newarticle', {
				url: '/newarticle',
				templateUrl: 'views/newarticle.html',
				controller: 'MainCtrl'
			})
			.state('home.event', {
				url: 'event',
				templateUrl: 'views/event.html',
				controller: 'MainCtrl'
			})
	});

}.call(this));
