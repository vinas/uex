app.directive('usersList', function() {
	return {
		restrict: 'AE',
		templateUrl: 'js/directives/users-list.html'
	};
}).directive('usersForm', function() {
	return {
		restrict: 'AE',
		templateUrl: 'js/directives/users-form.html'
	};
});