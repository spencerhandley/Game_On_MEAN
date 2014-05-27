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

app.controller('newArtCtrl', function ($scope, articleFactory, ArticlesService) {
    $scope.publishArticle = function () {
    	var newArticle = articleFactory.createArticle($scope.headline, $scope.body, $scope.type, $scope.source, $scope.event)
		ArticlesService.add(newArticle)
		console.log('published!');
	};
});

function Article(headline, body, type, source, event) {
	this.headline = headline;
	this.body = body;
	this.type = type;
	this.source = source;
	this.event = event;
	this.id = id;
}

app.value('articleFactory', {
	createArticle: function (headline, body, type, source, event) {
		var eventId = event.event_ID;
		return new Article(headline, body, type, source, eventId, -1)
	}
})

app.controller('editCtrl', function ($scope, ArticleService) {
    $scope.article = ArticleService.getArticle();
    $scope.deleteArticle = function (articleId) {
		console.log('DELETED', articleId);
	};
	$scope.updateArticle = function (articleId) {
		console.log('UPDATED', articleId);

	}
});

app.directive('sortable', function (ArticlesService) {
	var linker = function (scope, element, attrs) {
		var event_ID = scope.event;
		console.log(event_ID);
		element.sortable({
			items: 'li',
			connectWith: '.list',
			receive: function (event, ui) {
				var prevScope = angular.element(ui.item.prev()).scope();
				var curScope = angular.element(ui.item).scope();
				console.log("current scope", curScope.content)
				console.log("previous Scope", prevScope.content)
				scope.$apply(function () {
					ArticlesService.insertArticleAfter(curScope.content, prevScope.content)
					curScope.content.event_ID = event_ID
					console.log("event", curScope)
				})
			}
		})
	}
	return {
		link: linker
	}
});

app.directive('breadcrumbs', function () {
	var linker = function (scope, element, attrs) {
		// code here
	}

	var template = "<ol class='breadcrumb'><li><a href='#'>Events</a></li><li><a href='#'>{{}}</a></li></ol>"
	var controller = function ($scope) {
		// code here
	}
	return {
		restrict: "E",
		link: linker,
		template: template,
		controller: controller
	}
})
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
	template += "<h4>{{content.event_ID}}</h4>";
	template += "<div class='btn btn-danger' ng-click='deleteArticle(content.item_ID)'>Delete</div>";
	template += "<a ng-href='#/article/{{content.id}}/edit' article='{{content}}'' ng-click='editArticle(content.item_ID)' class='btn btn-primary'>Edit</a>"
	return {
		
		template: template,
		controller: controller,
		link: linker,
		scope: {
			content: '='
		}
	};
});