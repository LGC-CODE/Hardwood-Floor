var app = angular.module('myApp', []);

app.controller('galleryCtrl', ['$scope', function($scope){
	$scope.images = [
		{image: 'images/con4.jpg'},
		{image: 'images/con5.jpg'},
		{image: 'images/con6.jpg'},
		{image: 'images/con7.jpg'},
		{image: 'images/con8.jpg'},
		{image: 'images/con9.jpg'},
		{image: 'images/con10.jpg'},
		{image: 'images/con11.jpg'},
		{image: 'images/con12.jpg'},
		{image: 'images/con13.jpg'},
		{image: 'images/con14.jpg'},
		{image: 'images/con15.jpg'},
		{image: 'images/con16.jpg'},
		{image: 'images/con17.jpg'},
		{image: 'images/con18.jpg'},
		{image: 'images/con19.jpg'}
	]
}]);

console.log('Angular Active');