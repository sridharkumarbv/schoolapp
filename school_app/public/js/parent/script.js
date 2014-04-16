	// create the module and name it schoolApp
	var schoolApp = angular.module('schoolApp', ['ngRoute']);

	// configure our routes
	schoolApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/studentprofile',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/syllabus', {
				templateUrl : 'partials/syllabus.html',
				controller  : 'aboutController'
			})
   .when('/changepassword', {
				templateUrl : 'partials/changepassword',
				controller  : 'contactController'
			})
   
   .when('/parentviewreport', {
				templateUrl : 'partials/parentviewreport',
				controller  : 'contactController'
			})
			// route for the contact page  parentreportview
			
   .when('/parentviewmarks', {
				templateUrl : 'partials/ParentviewMarks',
			})
   .when('/parentmarksview', {
				templateUrl : 'partials/pviewmark',
			})
   .when('/parentviewhomework', {
				templateUrl : 'partials/ParentviewHomework',
			})
   .when('/parenthomeworkview', {
				templateUrl : 'partials/pviewhomework',
			})
	});

	// create the controller and inject Angular's $scope
	schoolApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	schoolApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	schoolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});