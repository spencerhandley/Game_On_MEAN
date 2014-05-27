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
				controller: 'newCtrl'
			})
			.state('home.event', {
				url: 'event/:event',
				templateUrl: 'views/event.html',
				controller: 'evtCtrl'
			})
			.state('home.edit', {
				url: 'article/:article/edit',
				templateUrl: 'views/edit.html',
				controller: function($scope, $stateParams, ArticleService) {
					$scope.item = $stateParams.item
					$scope.article = ArticleService.getArticle();
			    	$scope.deleteArticle = function (articleId) {
						console.log('DELETED', articleId);
					};
					$scope.updateArticle = function (articleId) {
						console.log('UPDATED', articleId);
					}
				}

				// "editctrl"
			})
	});

}.call(this));
