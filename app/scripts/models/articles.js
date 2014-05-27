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

	var insertArticleAfter = function(article, prevArt) {
		articles = articles.remove(function(t) {
			return t['item_ID'] == article.item_ID
		});
		articles = articles.add(article, articles.findIndex(prevArt) + 1)
	}

	return {
		getArticles: getArticles,
		insertArticleAfter: insertArticleAfter
	};
});
app.factory('ArticlesService', function() {
	var articles = [
		{id: 1,
		event_ID: 3,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 2,
		event_ID: 4,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 3,
		event_ID: 2,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 4,
		event_ID: 1,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 5,
		event_ID: 1,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 6,
		event_ID: 1,
		headine: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 7,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 8,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 9,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 10,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 11,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 12,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 13,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 14,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 15,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 16,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 17,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 18,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 19,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 20,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'}
	];
	var getArticles = function () {
		return articles;
	};
	var insertArticleAfter = function (article, prevArt) {
		console.log("ARTICLE IN FUNC", article)
		// articles.remove(article.id);
		console.log("ARTICLES", articles)
		articles.add(article, articles.findIndex(prevArt) + 1)
	}

	return {
		getArticles: getArticles,
		insertArticleAfter: insertArticleAfter
	};
});