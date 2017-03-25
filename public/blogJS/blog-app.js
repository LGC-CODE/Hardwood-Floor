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
					templateUrl: '/single.html',
					controller: 'singleCtrl',
					resolve: {
						blog: ['$stateParams', 'blogService', function($stateParams, blogService){
							return blogService.getArticleById($stateParams.id);
						}]
					}
				});
		}]);

app.controller('blogCtrl', ['$scope', 'blogService', function($scope, blogService){

	$scope.articles = blogService.articles;
	blogService.getAllArticles();

}]);

app.controller('singleCtrl', ['$scope', 'blogService', 'blog', '$window', function($scope, blogService, blog, $window){
	$scope.article = blog;
	console.log(blog);

	$scope.newComment = function(){
		if(!$scope.user) { 
			alert('nombre y comentario son necesarios');
			return;
		}

		blogService.newComment(blog._id, $scope.user);

		blog.comments.push({name: $scope.user.name, comment: $scope.user.comment});

		$scope.user = "";
	};

	$scope.incrementComUpvotes = function(event){
		blogService.upvoteEvent(event);
		event.upvotes += 1;
		$window.localStorage[event.comment] = true; //single event
		event.isLiked = $window.localStorage[event.comment];
	};

	$scope.decrementComUpvotes = function(event){
		blogService.downvoteEvent(event);
		event.upvotes -= 1;
		$window.localStorage[event.comment] = '';
		event.isLiked = $window.localStorage[event.comment];
	};

}]);
