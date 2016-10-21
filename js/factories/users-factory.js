app.factory('UsersFactory', function($http) {

	this.getUsersList = function()
	{

		return $http.get('http://vinas.pe.hu/Users/listUsers/');
	}

	this.getUserById = function(id)
	{
        return $http.get('http://vinas.pe.hu/Users/getUser/'+id);
	}

	return this;
})