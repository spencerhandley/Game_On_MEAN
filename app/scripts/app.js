'use strict';
(function(){


	var app = angular.module('gameonMeanApp', ['ui.router', 'ngResource']);
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'': {templateUrl: 'views/main.html',controller: 'MainCtrl' },
					'eventsSide@home' : {templateUrl: 'views/eventList.html'},
					'articlesSide@home' : {templateUrl: 'views/articlesSide.html'}

				},
				controller: 'MainCtrl'
			})
			.state('home.newarticle', {
				url: '/newarticle',
				views: {
					'': {templateUrl: 'views/main.html'},
					'eventsSide@home' : {
						templateUrl: 'views/edit.html',

					},
					'articlesSide@home' : {templateUrl: 'views/articlesSide.html'}

				},
				
			})
			.state('home.event', {
				url: 'event/:event',
				views: {
					'': {templateUrl: 'views/main.html'},
					'eventsSide@home' : {templateUrl: 'views/event.html'},
					'articlesSide@home' : {templateUrl: 'views/articlesSide.html'}

				},
				controller: 'MainCtrl'
			})
			.state('home.edit', {
				url: 'article/:article/edit',
				views: {
					'': {templateUrl: 'views/main.html'},
					'eventsSide@home' : {
						templateUrl: 'views/edit.html',
						controller: function($scope, $stateParams, ArticlesService) {
							var articleid = $stateParams.article;
							// console.log("article", _.where(ArticlesService.getArticles(), {id: Number(articleid)})[0])
							$scope.article = _.where($scope.articles, {id: Number(articleid)})[0];
						} 
					},
					'articlesSide@home' : {templateUrl: 'views/articlesSide.html'}
				}
			})
	});

}.call(this));
