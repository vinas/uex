app.controller('usersController', function($scope, $http, UsersFactory, UsersService) {
 	
 	$scope.listUsers = function()
 	{
		UsersFactory.getUsersList()
            .success(function(users) {
                $scope.users = users;
				$scope.templateURL = 'templates/users-list.html';
            })
            .error(function(res, status) {
                console.log("Error: " + res + "\nStatus: " + status);
            }
		);
	};
	
	$scope.getUser = function(id)
	{
		UsersFactory.getUserById(id)
            .success(function(user) {
                $scope.user = user;
				$scope.templateURL = 'templates/users-form.html';
            })
            .error(function(response, status) {
                console.log("Error: " + response + "\nStatus: " + status);
            });
	};

	$scope.newUser = function()
	{
		$scope.user = {};
		$scope.templateURL = 'templates/users-form.html';
	};

	$scope.save = function()
	{

		// if (isUserDataValid($scope.user)) {
		// 	UsersService.save()
		// 		.success(function(user) {
		// 			$scope.templateURL = 'templates/users-list.html';
	 //        	})
	 //            .error(function(response, status) {
	 //                console.log("Error: " + response + "\nStatus: " + status);
	 //            });
		// }
	};

  //   $scope.deleteUser = function(id) {
  //       confirm("delete " + id + "?");
  //   };

	$scope.users = [];
	$scope.listUsers();

});