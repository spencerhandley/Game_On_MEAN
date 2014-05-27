'use strict';
var app = angular.module('gameonMeanApp')
app.controller('MainCtrl', function ($scope, ArticlesService, EventsService) {
    $scope.articles = ArticlesService.getArticles();
    $scope.events = EventsService.getEvents();

  });

app.controller('evtCtrl', function ($scope, ArticlesService) {
    $scope.articles = ArticlesService.getArticles();
    $scope.event = 1

});

app.controller('newCtrl', function ($scope) {
    $scope.publishArticle = function () {
		console.log('published!');
	};
});

app.controller('editCtrl', function ($scope, ArticleService) {
    $scope.article = ArticleService.getArticle();
    $scope.deleteArticle = function (articleId) {
		console.log('DELETED', articleId);
	};
	$scope.updateArticle = function (articleId) {
		console.log('UPDATED', articleId);

	}
});

app.directive('sortable', function () {
	var linker = function (scope, element, attrs) {
		var event = scope.event;
		console.log(event);
		element.sortable({
			items: 'li',
			connectWith: '.list',
			receive: function (event, ui) {
				var prevScope = angular.element(ui.item.prev()).scope();
				var curScope = angular.element(ui.item).scope();
				scope.$apply(function () {
					ArticleModel.insertStoryAfter(curScope.article, prevScope.article)
					curScope.article.status = status
				})
			}
		})
	}
	return {
		link: linker
	}
});

app.directive('articleDrt', function () {
	var linker = function(scope, element) {
		element.mouseover(function () {
			element.css({'opacity': 0.9})
		}).mouseout(function () {
			element.css({'opacity': 1.0})
		})
		// functions here
		// element.on('click', function () {
		//do stuff
		// });
	};
	var controller = function($scope) {
		$scope.deleteArticle = function (articleId) {
			console.log('DELETED', articleId);
		};
		$scope.editArticle = function (articleId) {
			console.log('EDIT ARTICLE', articleId);
		};
	}
	var template = "<h3>{{content.headline}}</h3>";
	template += "<h4>{{content.type}}</h4>";
	template += "<div class='btn btn-danger' ng-click='deleteArticle(content.item_ID)'>Delete</div>";
	template += "<a ui-sref='home.edit' ng-click='editArticle(content.item_ID)' class='btn btn-primary'>Edit</a>"
	return {
		
		template: template,
		controller: controller,
		link: linker,
		scope: {
			content: '='
		}
	};
});