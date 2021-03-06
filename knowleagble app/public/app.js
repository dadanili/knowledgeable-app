angular.module('myapp', ['services', 'expertise', 'charity', 'myprofile', 'ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'basicinfo/basicinfo.html',
      		controller: 'myController'
		})
		.when('/basicinfo', {
			templateUrl: 'basicinfo/basicinfo.html',
      		controller: 'myController'
		})
		.when('/expertise', {
			templateUrl: 'expertise/expertise.html',
      		controller: 'expertiseController'
		})
		.when('/charity', {
			templateUrl: 'charity/charity.html',
      		controller: 'charityController'
		})
		.when('/myprofile', {
			templateUrl: 'myprofile/myprofile.html',
      		controller: 'profileController'
		})
		.otherwise({
			redirectTo: '/'
		})
})
.controller('myController', function($scope, basicAjax, $location, user) {
	// $scope

	$scope.submit = function() {
		var data = {
			firstname: $scope.firstname,
			lastname: $scope.lastname,
			linkedin: $scope.linkedin
		};
		basicAjax.submitProfile(data)
		.then(function(result) {
			// console.log(result, 'this is the result from submiting profile')
			user.setUser(result.data);
			$location.path('/expertise');
		})
	}
});





