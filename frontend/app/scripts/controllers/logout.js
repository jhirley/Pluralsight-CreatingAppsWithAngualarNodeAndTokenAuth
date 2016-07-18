'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
