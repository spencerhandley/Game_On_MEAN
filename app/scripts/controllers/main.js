'use strict';
var app = angular.module('gameonMeanApp')
app.controller('MainCtrl', function ($scope, ArticlesService, EventsService, events) {
	var eventserve = events.get()
	console.log(eventserve)

    $scope.articles = ArticlesService.getArticles();
    $scope.events = EventsService.getEvents();
    $scope.path = null
    $scope.path2 = null 
    $scope.changePath1 = function(path) {
    	$scope.path = path
    }
    $scope.changePath2 = function(path) {
    	$scope.path2 = path
    }
    $scope.changePath3 = function(path) {
    	$scope.path = path
    }
    $scope.resetPaths = function(path) {
    	$scope.path = null
    	$scope.path2 = null

    }

  })


app.controller('evtCtrl', function ($scope) {
    $scope.setEventId = function (eventId) {
    	console.log(eventId)
    	$scope.eventId = eventId
    }
});

app.controller('artCtrl', function ($scope, ArticlesService) {
	$scope.deleteArticle = function (article) {
			ArticlesService.deleteArticle(article)
			console.log('DELETED', articleId);
		};
	$scope.editArticle = function (articleId, path) {
		$scope.path2 = path
		console.log('EDIT ARTICLE', articleId);
	};
	$scope.publishArticle = function () {
    	var newArticle = articleFactory.createArticle($scope.headline, $scope.body, $scope.type, $scope.source, $scope.event)
		ArticlesService.add(newArticle)
		console.log('published!');
	};

})

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

app.directive('sortable', function (ArticlesService) {
	var linker = function (scope, element, attrs) {
		console.log(scope)
		var event_ID = scope.article;
		element.sortable({
			items: 'li',
			connectWith: '.list',
			receive: function (event, ui) {
				// console.log("element", element.scope())
				var prevScope = angular.element(ui.item.prev()).scope();
				var curScope = angular.element(ui.item).scope();
				// console.log("current scope", curScope)
				// console.log("previous Scope", prevScope)
				scope.$apply(function () {
					ArticlesService.insertArticleAfter(curScope, prevScope)
					curScope.content.event_ID = event_ID
					// console.log("event", curScope)
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

	var controller = function ($scope) {

		// code here
	}
	return {
		restrict: "E",
		link: linker,
		templateUrl: '../../views/breadcrumb.html',
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
	};
	return {
		templateUrl: '../../views/article.html',
		controller: "artCtrl",
		link: linker
	};
});