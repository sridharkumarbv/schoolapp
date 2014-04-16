	// create the module and name it schoolApp
	var schoolApp = angular.module('schoolApp', ['ngRoute']);

	// configure our routes
	schoolApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/teacherprofile',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/syllabus', {
				templateUrl : 'pages/syllabus',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			.when('/teachereditprofile', {
				templateUrl : 'pages/teachereditprofile',
				controller  : 'contactController'
			})
			.when('/changepassword', {
				templateUrl : 'pages/changepassword',
				controller  : 'contactController'
			})
			.when('/addSyllabus', {
				templateUrl : 'pages/addSyllabus',
				controller  : 'maincontroller'
			})
			.when('/viewSyllabus', {
				templateUrl : 'pages/viewSyllabus',
				controller  : 'maincontroller'
			})
   .when('/report', {
				templateUrl : 'pages/report',
				controller  : 'Report'
			})
   .when('/addreport', {
				templateUrl : 'pages/GenerateReport',
				controller  : 'Report'
			})
    .when('/viewReport', {
				templateUrl : 'pages/viewReport',
				controller  : 'Report'
			})
   .when('/teacherreportview', {
				templateUrl : 'pages/teacherreportview',
				controller  : 'Report'
			}).when('/mark', {
				templateUrl : 'pages/MarksView',
				controller  : 'Marks'
			})
   .when('/addmark', {
				templateUrl : 'pages/GenerateMarks',
				controller  : 'Marks'
			})
   .when('/viewMarks', {
				templateUrl : 'pages/viewMarks',
				controller  : 'Marks'
			})
   .when('/Homework', {
				templateUrl : 'pages/HomeworkView',
				controller  : 'Homework'
			})
   .when('/addHomework', {
				templateUrl : 'pages/GenerateHomework',
				controller  : 'Homework'
			})
   .when('/viewHomework', {
				templateUrl : 'pages/viewHomework',
				controller  : 'Homework'
			});
	});

	// create the controller and inject Angular's $scope
	
	schoolApp.controller('mainController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	schoolApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	schoolApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	schoolApp.controller('maincontroller', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});