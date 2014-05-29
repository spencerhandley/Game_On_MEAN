'use strict';
var app = angular.module('gameonMeanApp')
app.controller('MainCtrl', function ($scope, ArticlesService, EventsService) {
	// var eventserve = events.get()
	// var articleHolder = []
	// EventsService.getEvents().forEach(function (event) {
	// 	event.stories.forEach(function (story) {
	// 		articleHolder.push(story)
	// 	});
	// })
    $scope.articles = EventsService.getArticles();
    $scope.events = EventsService.getEvents();

    $scope.setEventId = function (eventId) {
		$scope.eventId = eventId
		console.log($scope)
    }
    $scope.createArticle = function (evtId, body, headline, source, type) {
			var article = {id: 50,
				event_ID: evtId,
				headline: headline,
				body: body,
				type: type,
				source: source}
			EventsService.insertArticle(article, evtId)
		};



  })


// app.controller('evtCtrl', function ($scope) {

// });

// app.controller('artCtrl', function ($scope, ArticlesService) {
	

// })

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

app.directive('sortable', function (EventsService) {
	var linker = function (scope, element, attrs) {
		var event_ID = scope.eventId;
		element.sortable({
			items: "article-drt",
            connectWith: ".list",
            remove: function(event, ui) {
                ui.item.clone().prependTo('#eventArticlesPanel');
                $(this).sortable('cancel');
            },
            receive: function (event, ui) {
				var curScope = angular.element(ui.item).scope();
				console.log("current scope", curScope)
				scope.$apply(function () {
					EventService.insertArticleAfter(curScope, prevScope, event_ID)
					curScope.article.event_ID = event_ID
					// console.log("event", curScope)
				})
			}
        }).disableSelection();
    
	    $( "#sortable2" ).sortable({
	        }).disableSelection();

	}
	return {
		link: linker,
		controller: "MainCtrl"
		// scope: {
		// 	article: "="
		// }
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
	var controller = function ($scope, ArticlesService) {
		$scope.editArticle = function (articleId) {
			console.log('EDIT ARTICLE', articleId);
		};
		$scope.publishArticle = function () {
	    	var newArticle = articleFactory.createArticle($scope.headline, $scope.body, $scope.type, $scope.source, $scope.event)
			ArticlesService.add(newArticle)
			console.log('published!');
		};
	}
	var linker = function(scope, element, attrs) {
		element.mouseover(function () {
			element.css({'opacity': 0.9})
		}).mouseout(function () {
			element.css({'opacity': 1.0})
		})
	};
	return {
		restrict: "E",
		templateUrl: '../../views/article.html',
		controller: controller,
		link: linker,
		scope: true
	};
});

app.directive('deleteButton', function () {
	var controller = function ($scope, EventsService, $urlRouter) {
		$scope.deleteArticle = function (id) {
			EventsService.deleteArticle(id)
			console.log('DELETED', id);
			$scope.$apply()
		};
	}
	var linker = function (scope, element, attrs) {
		element.on('click', function () {
			scope.deleteArticle(scope.article.id)
			element.parent().parent().hide()
		})
	}
	return {
		restrict: "E",
		replace:true,
		link: linker,
		controller:controller,
		template: "<div class='btn btn-danger'>Delete</div>"
	}
})


app.directive('editButton', function () {
	var linker = function (scope, element, attrs) {
		element.on('click', function () {
			scope.editArticle(scope.article.id)

		})
	}
	return {
		restrict: "E",
		link: linker,
		template: "<a ng-href='#/article/{{article.id}}/edit' class='btn btn-primary'>Edit</a>"
	}
})

app.directive('updateButton', function () {
	var linker = function (scope, element, attrs) {
		element.on('click', function () {
			scope.updateArticle(scope.article.id)

		})
	}
	return {
		restrict: "E",
		link: linker,
		template: "<a ng-href='#/events/{{article.event_ID}}' ng-click='updateArticle(article.item_ID)' class='btn btn-primary'>Update</a>"
	}
})

app.directive('createButton', function () {
	var linker = function (scope, element, attrs) {
		element.on('click', function () {
			scope.createArticle(scope.article.event_ID, scope.article.body, scope.article.headline, scope.article.source, scope.article.type)

		})
	}
	return {
		restrict: "E",
		link: linker,
		template: "<a ng-href='#/events/{{article.event_ID}}' ng-click='updateArticle(article.item_ID)' class='btn btn-primary'>Create</a>"
	}
})


