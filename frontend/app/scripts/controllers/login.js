'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('LoginCtrl', function ($scope, $http, alert, auth ) {
	$scope.submit = function() {
	
	auth.login($scope.email, $scope.password)
		.success(function(res){
			alert('success','Logged In!!' ,' Welcome, ' + res.user.email + '!', 2000);
			
		})
		.error(function(err){
			alert('warning','Something went Wrong :(' , err.message, 2000);
		});
	};
});
