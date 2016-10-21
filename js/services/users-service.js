app.service('UsersService', function() {

	this.save = function(user)
	{
		$http.post('http://vinas.pe.hu/Users/save/', $scope.user);
	}

	this.isUserDataValid = function(user)
	{
		if (!user.user) {
			return false;
		} else if (!user.email) {
			return false;
		} else if (!user.password1 || !user.password1 || user.password1 != user.password2) {
			retrun false;
		}
		return true;
	};

	return this;
});