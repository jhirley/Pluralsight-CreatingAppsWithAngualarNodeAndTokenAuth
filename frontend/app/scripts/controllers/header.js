'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
