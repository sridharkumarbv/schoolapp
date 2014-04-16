function changepassword($scope, $http)  {

	$scope.changepassword = function(){
		var changepassword = $scope.formData;
		//console.log("syllbaus"+syllabus);
		var data = {};
		
		data.current_password = changepassword.current_password;
		//console.log(syllabus.clas);
		data.new_password = changepassword.new_password;
		data.confirm_password = changepassword.confirm_password;
		
		
		console.log("am into changespassrd js");
		
		$http.post('/changepassword',  data).success(function(data, status, headers, config){
			console.log("changepassowrd httppost ");
			if (data.success == true) {
				changepassword = data[changepassword];
				//console.log("from report "+report);
				$scope.successMessage = "Password Changed Successfully";
				$scope.success = true;
				$scope.error = false;
				//$scope.$apply(function() { $location.path("#/syllabus"); });
				// $location.path("/report");
			} else {
				$scope.errorMessage = "No form submitted";
				$scope.error = true;
				$scope.success = false;
			}
		});
	}
	
}