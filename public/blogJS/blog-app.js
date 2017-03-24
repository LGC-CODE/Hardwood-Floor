var app = angular.module('blog-app', ['ui.router']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'blogCtrl'
				});
			$urlRouterProvider.otherwise('home');
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('single', {
					url: '/home/{id}',
					templateUrl: '/home.html',
					controller: 'articleCtrl',
					resolve: {
						blog: ['$stateParams', 'blogService', function($stateParams, blogService){
							return blogService.getArticleById($stateParams.id);
						}]
					}
				});
		}]);

app.controller('blogCtrl', ['$scope', 'blogService', function($scope, blogService){
	var blog = blogService;

	$scope.articles = blog.articles;

}]);

app.controller('articleCtrl', ['$scope', 'blogService', 'blog', function($scope, blogService, blog){
	var singleBlog = blog;

}]);
