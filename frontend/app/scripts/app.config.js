//

'use strict';

angular
  .module('code1App').config(function($urlRouterProvider, $stateProvider, $httpProvider){

  	$urlRouterProvider.otherwise('/');

  	$stateProvider
	.state('main', {
  		url: '/',
  		templateUrl: '/views/main.html'
  	})
  	.state('register', {
  		url: '/register',
  		templateUrl: '/views/register.html',
  		controller:'RegisterCtrl'
  	})
    .state('jobs', {
      url: '/jobs',
      templateUrl: '/views/jobs.html',
      controller:'JobsCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller:'LogoutCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller:'LoginCtrl'
    });

    $httpProvider.interceptors.push('authInterceptor');
  })
  .constant('API_URL','http://localhost:3000/');