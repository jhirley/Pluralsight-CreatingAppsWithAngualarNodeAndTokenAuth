'use strict';

/**
 * @ngdoc function
 * @name code1App.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the code1App
 */
angular.module('code1App')
  .controller('JobsCtrl', function ($scope) {
    $scope.jobs = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
