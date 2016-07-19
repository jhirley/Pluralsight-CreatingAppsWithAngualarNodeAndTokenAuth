'use strict';

/**
 * @ngdoc service
 * @name code1App.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the code1App.
 */
angular.module('code1App')
  .factory('authInterceptor', function (authToken) {

    return {
      request: function (config) {
        var token = authToken.getToken();

        if(token)
        {
          config.headers.authorization = 'Bearer ' + token;
        }
        return config;
      },
      reponse: function(response) {

        return response;

      }
    };
  });
