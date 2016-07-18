'use strict';

/**
 * @ngdoc service
 * @name code1App.authToken
 * @description
 * # authToken
 * Factory in the code1App.
 */
angular.module('code1App')
  .factory('authToken', function ($window) {
    // Service logic
    // ...

    var storage = $window.localStorage;
    var cachedToken;

    // Public API here
    return {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem('userToken',token);

      },
      getToken: function() {
        if(!cachedToken) 
          {cachedToken = storage.getItem('userToken');}

        return cachedToken;
      },
      isAuthenticated: function() {
        return !! getToken();

      }
    };
});
