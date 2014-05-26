'use strict';

angular.module('gameonMeanApp').controller('MainCtrl', function ($scope, ArticlesService, EventsService) {
    $scope.articles = ArticlesService.getArticles();
    $scope.events = EventsService.getEvents();
    $scope.deleteArticle = function (articleId) {
			console.log('ArticleID', articleId);
		};
  });

angular.module('gameonMeanApp').controller('articleCtrl', function ($scope, ArticlesService) {
	$scope.articles = ArticlesService.getArticles();
	$scope.deleteArticle = function (articleId) {
			console.log('ArticleID', articleId);
		};
	$scope.editArticle = function (articleId) {
		console.log('EDIT ARTICLE', articleId);
	};
});


angular.module('gameonMeanApp').directive('articleDrt', function () {
	var linker = function(scope, element) {
		console.log("ELEMENT", element)
		// functions here
		// element.on('click', function () {
		//do stuff
		// });
	};
	var controller = function($scope, ArticlesService) {
		$scope.articles = ArticlesService.getArticles();
		$scope.deleteArticle = function (articleId) {
				console.log('ArticleID', articleId);
			};
		$scope.editArticle = function (articleId) {
			console.log('EDIT ARTICLE', articleId);
			};
	}
	var template = "<h3>{{content.headline}}</h3>";
	template += "<h4>{{content.type}}</h4>";
	template += "<div class='btn btn-danger' ng-click='deleteArticle(content.item_ID)'>Delete</div>";
	template += "<a ui-sref='editart' class='btn btn-primary'>Edit</a>"
	return {
		
		template: template,
		controller: controller,
		link: linker,
		scope: {
			content: '='
		}
	};
});