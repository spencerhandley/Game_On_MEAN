'use strict';

var app = angular.module('gameonMeanApp')


app.factory('ArticlesService', function($rootScope) {
	var articles = [
		{id: 1,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 2,
		event_ID: 4,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 3,
		event_ID: 2,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 4,
		event_ID: 1,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 5,
		event_ID: 1,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 6,
		event_ID: 1,
		headline: 'this is a headline',
		body: 'this is a body',
		type:'article',
		source: 'Twitter Handle'},
		{id: 7,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 8,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 9,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 10,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 11,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 12,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 13,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 14,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 15,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 16,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 17,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 18,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 19,
		event_ID: 3,
		headline: 'this is a headline',
		body: 'this is a body',
		type: 'article',
		source: 'Twitter Handle'},
		{id: 20,
		event_ID: 3,
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
		articles = articles.remove(function(t) {
			return t['id'] == article.id
		});
		console.log("ARTICLES", articles)
		articles = articles.add(article, articles.findIndex(prevArt) + 1)
	};
	var deleteArticle = function (id) {
		console.log(id)
		articles.remove(function(s) {
			return s.id == id;
		})
		console.log(articles)
	}


	return {
		deleteArticle: deleteArticle,
		getArticles: getArticles,
		insertArticleAfter: insertArticleAfter
	};
});