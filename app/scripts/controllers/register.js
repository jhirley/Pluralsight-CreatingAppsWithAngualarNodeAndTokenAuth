'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function() {
    	console.log("test message from RegisterCtrl");
    };
  });
