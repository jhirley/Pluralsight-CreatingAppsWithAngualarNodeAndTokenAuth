//

angular
  .module('code1App').config(function($stateProvider){

  	$stateProvider.state('register', {
  		url: '/register',
  		templateUrl: '/views/register.html'
  	});
  });