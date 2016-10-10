angular.module('usersrest', [])
.directive('usersList', function() {
	return { templateUrl: 'js/directives/users-list.html' };
});