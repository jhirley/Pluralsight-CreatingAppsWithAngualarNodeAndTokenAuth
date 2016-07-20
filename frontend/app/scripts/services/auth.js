'use strict';

/**
 * @ngdoc service
 * @name code1App.auth
 * @description
 * # auth
 * Service in the code1App.
 */
angular.module('code1App')
  .service('auth', function ( $http, API_URL, authToken, $state) {
    // AngularJS will instantiate a singleton by calling "new" on this function

	function authSuccessful(res){
		authToken.setToken(res.token);
		$state.go('main');
	}

	this.login = function(email, password) {
		return $http.post(API_URL + 'login', {email: email ,password: password})
			.success(authSuccessful);
	};

	this.register = function(email, password) {
		return $http.post(API_URL + 'register', {email: email ,password: password})
			.success(authSuccessful);
	};


  });