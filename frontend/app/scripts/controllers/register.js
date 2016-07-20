'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('RegisterCtrl', function ($scope, $http, $rootScope, alert, authToken, API_URL) {
    $scope.submit = function() {

    	var url = API_URL + 'register';
    	var user = {
            email: $scope.email,
            password: $scope.password
        };
    	
    	$http.post(url, user)
    		.success(function(res){
    			alert('success','Account Created!!' ,' Welcome, ' + res.user.email + '!', 2000);
                authToken.setToken(res.token);
    		})
    		.error(function(err){
    			alert('warning','Opps!' ,' Could not register!', 2000);
    		});
    };
});
