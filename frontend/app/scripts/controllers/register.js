'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('RegisterCtrl', function ($scope, $http, $rootScope, alert) {
    $scope.submit = function() {

    	var url = 'http://localhost:3000/register';
    	var user = {
            email: $scope.email,
            password: $scope.password
        };
    	
    	$http.post(url, user)
    		.success(function(res){
    			alert('success','Ok!!' ,'You are now registered!', 2000);
    		})
    		.error(function(err){
    			alert('warning','Opps!' ,'Could not register!', 2000);
    		});
    };
  });
