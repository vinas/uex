angular.module('usersrest').controller('UsersController', function($scope, $http) {
 	
 	$scope.users = [];
 	//$http.get('http://vinas.pe.hu/Users/listUsers/')
 	$http.get('http://localhost:8042/Users/listUsers/')
 	.then(
 		function(res) {
 			$scope.users = res.data;
 		}
	).catch(function(err){
		console.log(err);
	});

});
