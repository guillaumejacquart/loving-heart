var controllers = angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $state, $rootScope, backend) {
	
})

.controller('HomeCtrl', function($scope, $cordovaGeolocation, $stateParams, $rootScope, backend) {
	
})

.controller('SettingsCtrl', function($scope, $stateParams, $location, $rootScope, backend) {
			
	$scope.save = function(){
		if(!$rootScope.user.loverEmail){
			return;
		}
		if($rootScope.user.loverEmail == backend.user.email){			
			$rootScope.error_lover = 'You can\'t be your own lover ! That is narcissistic, my friend !';
			return; 
		}
		
		backend.saveLover($scope.user.loverEmail.toLowerCase());
	}
	
	$scope.logout = function(){
		backend.firebaseRef.unauth();
		$location.path('/login');
	};
    
})