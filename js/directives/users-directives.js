angular.module('usersDirectives', [])
.directive('usersList', function() {
	var ddo = {};
	ddo.restrict = "AE";
	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/users-list.html';
	return ddo;
});