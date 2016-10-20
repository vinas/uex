app.controller('usersController', function($scope, $http) {
 	
 	$scope.users = [];
 	$http.get('http://vinas.pe.hu/Users/listUsers/')
 	.then(
 		function(res) {
 			$scope.users = res.data;
 			$scope.templateURL = 'js/directives/users-list.html';
 		}
	).catch(function(err){
		console.log(err);
	});

    $scope.getUser = function(id) {
	 	$http.get('http://vinas.pe.hu/Users/getUser/'+id)
	 	.then(
	 		function(res) {
	 			$scope.user = res.data;
			    $scope.templateURL = 'js/directives/users-form.html';
	 		}
		).catch(function(err){
			console.log(err);
		});
    };

  //   $scope.deleteUser = function(id) {
  //       confirm("delete " + id + "?");
  //   };


});