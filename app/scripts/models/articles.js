'use strict';

var app = angular.module('gameonMeanApp')

app.factory('ArticleService', function() {
	var article = 
		{'item_ID' : 1,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'Article',
		'source': 'Twitter Handle'}
		
	var getArticle = function () {
		return article;
	};

	return {
		getArticle: getArticle
	};
});

app.factory('EventArticlesService', function() {
	var articles = [
		{'item_ID' : 1,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 2,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 3,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 4,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 5,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'}
	];
	var getArticles = function () {
		return articles;
	};

	return {
		getArticles: getArticles
	};
});
app.factory('ArticlesService', function() {
	var articles = [
		{'item_ID' : 1,
		'event': 3,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 2,
		'event': 4,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 3,
		'event': 2,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 4,
		'event': 1,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 5,
		'event': 1,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 6,
		'event': 1,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 7,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 8,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 9,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 10,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 11,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 12,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 13,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 14,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 15,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 16,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 17,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 18,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 19,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'},
		{'item_ID' : 20,
		'headline': 'this is a headline',
		'body': 'this is a body',
		'type': 'article',
		'source': 'Twitter Handle'}
	];
	var getArticles = function () {
		return articles;
	};

	return {
		getArticles: getArticles
	};
});