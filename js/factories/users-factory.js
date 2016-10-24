app.factory('UsersFactory', function($http) {

	this.getUsersList = function()
	{

		return $http.get('http://vinas.pe.hu/Users/listUsers/');
	}

	this.getUserById = function(id)
	{
        return $http.get('http://vinas.pe.hu/Users/getUser/'+id);
	}

	this.save = function(user)
	{
		return $http.post('http://vinas.pe.hu/Users/save/', $.param(user),
				{
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        		}
			);
	}

	this.delete = function(id)
	{
        return $http.get('http://vinas.pe.hu/Users/delete/'+id);
	}

	return this;
})