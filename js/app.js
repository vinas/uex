var app = angular.module('app', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				redirectTo: '/home',
			})
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'homeController'
			})
			.when('/users', {
				templateUrl: 'templates/users-main.html',
				controller: 'usersController'
			})
			.otherwise({
				redirectTo: '/home',
			})
	}]);
