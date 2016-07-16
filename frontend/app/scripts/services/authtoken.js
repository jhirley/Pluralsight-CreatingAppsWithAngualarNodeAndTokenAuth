'use strict';

/**
 * @ngdoc service
 * @name code1App.authToken
 * @description
 * # authToken
 * Factory in the code1App.
 */
angular.module('code1App')
  .factory('authToken', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
