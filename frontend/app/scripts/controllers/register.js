'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('RegisterCtrl', function ($scope, $http, alert, auth) {
    $scope.submit = function() {

	auth.register($scope.email, $scope.password)
		.success(function(res){
			alert('success','Account Created!!' ,' Welcome, ' + res.user.email + '!', 2000);
		})
		.error(function(err){
			alert('warning','Opps!' ,' Could not register!', 2000);
		});
    };
});
