'use strict';

/**
 * @ngdoc service
 * @name code1App.alert
 * @description
 * # alert
 * Service in the code1App.
 */
angular.module('code1App')
  .service('alert', function ($rootScope, $timeout) {

  	var alertTimeout;

    return function(type, title, message, timeout) {
    	$rootScope.alert = {
    		hasBeenShown: true,
    		show: true,
    		type: type,
    		message: message,
    		title: title
    	};

    	$timeout.cancel(alertTimeout);
    	alertTimeout = $timeout(function() {
    		$rootScope.alert.show = false;
    	}, timeout || 2000);
    };
  });
