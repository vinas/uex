app.service('UsersService', function($http) {

	this.save = function(user)
	{
		return $http.post('http://vinas.pe.hu/Users/save/', $.param(user),
				{
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        		}
			);
	}

	this.isUserDataValid = function(user)
	{
		if (!user.user) {
			return false;
		} else if (!user.email) {
			return false;
		} else if (!user.password1 || !user.password1 || user.password1 != user.password2) {
			return false;
		}
		return true;
	};

	return this;
});