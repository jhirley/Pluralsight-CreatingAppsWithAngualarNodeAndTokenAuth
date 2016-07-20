'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('LoginCtrl', function ($scope, $http, API_URL, $rootScope, alert, authToken) {
	$scope.submit = function() {

		var url = API_URL + 'login';
		var user = {
			email: $scope.email,
			password: $scope.password
		};
		
		$http.post(url, user)
			.success(function(res){
				alert('success','Logged In!!' ,' Welcome, ' + res.user.email + '!', 2000);
				authToken.setToken(res.token);
			})
			.error(function(err){
				alert('warning','Something went Wrong :(' , err.message, 2000);
			});
	};
});
