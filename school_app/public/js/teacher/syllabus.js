function Syllabus($scope, $http, $location, $locale, $sce) {
	var datetime = $locale.DATETIME_FORMATS;
	$scope.cal_months = datetime.MONTH;
	
	var d=new Date();
	$scope.current_month=d.getMonth();
 
 $scope.delete = function() {
                console.log("hai from delete syllabus");
                $scope.myValue = true;
                        }
	$scope.Classes=[
 { "Name":"Class","Sections":[
      {"Name":"Section "}],
	  "Students":[
      {"Name":"Students"}],"Subjects":[{"Name":"Select Subject"}]
      },
    { "Name":"1","Sections":[
     {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"}
      ],
	  "Students":[
      {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[{"Name":"Select subject"},
      {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"2","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"}
     ], "Students":[
      {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
      {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"3","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],
	   "Students":[
     {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
      {"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"4","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
       {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[{"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"5","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
    {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"6","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
       {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"7","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
    {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[{"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"8","Sections":[
    {"Name":"Select Section"},
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
       {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
        {"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"9","Sections":[
    {"Name":"Select Section"},
      {"Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
       {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"10","Sections":[
   {"Name":"Select Section"},
      { "Name":"A"},
      {"Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
    {"Name":"Select Roll-Number"},
      { "Name":"s1"},
      { "Name":"s2"},
	  { "Name":"s3"},
      { "Name":"s4"},
	  { "Name":"s5"},
      { "Name":"s6"},
	  { "Name":"s7"},
      { "Name":"s8"},
	  { "Name":"s9"},
      { "Name":"s10"},
	  { "Name":"s11"},
      { "Name":"s12"},
	  { "Name":"s13"},
      { "Name":"s14"},
	  { "Name":"s15"},
      { "Name":"s16"},
	  { "Name":"s17"},
      { "Name":"s18"},
	  { "Name":"s19"},
      { "Name":"s20"}
      ],"Subjects":[
      {"Name":"Select subject"},
   {"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]}
	  ] ;
   
 $scope.$watch('formData.classname', function(){
	
	$scope.formData.subject = $scope.formData.classname.Subjects[0];
	$scope.formData.month = $scope.Months[0];
})
  $scope.SelectedClass = $scope.Classes[0];
  $scope.Months=[{ "Name":"January"},
	  { "Name":"February"},
      { "Name":"March"},
	  { "Name":"April"},
      { "Name":"May"},
	  { "Name":"June"},
      { "Name":"July"},
	  { "Name":"August"},
      { "Name":"September"},
	  { "Name":"October"},{"Name" :"November"},{"Name" :"December"}];

	
	$scope.addSyllabus = function(){
		var syllabus = $scope.formData;
		var data = {};
		
		data.sclass = syllabus.classname.Name;
		data.subject = syllabus.subject.Name;
		data.month = $scope.searchForm.month;
		data.syllabus = syllabus.text;
		
		$http.post('/addSyllabus',  data).success(function(data, status, headers, config){

			if (data.success == true) {
				syllabus = data[syllabus];
				console.log("from syllabus "+syllabus);
				$scope.successMessage = "Syllabus Added Successfully....";
				$scope.success = true;
				$scope.error = false;
				$scope.formData = {'classname':$scope.Classes[0], 'month': $scope.Months[0], 'subject': $scope.Classes[0].Subjects[0]};
			} else {
				$scope.errorMessage = "No form submitted";
				$scope.error = true;
				//$scope.success = false;
				
			}
		});
	}
	
	$scope.clearAddSyllabus = function(){
		console.log("Called Clear Add Syllabus");
		$scope.errorMessage = "Form Cleared";
		$scope.error = true;
		$scope.success = false;
		$scope.formData = {'classname':$scope.Classes[0], 'month': $scope.Months[0], 'subject': $scope.Classes[0].Subjects[0]};
	}

	$scope.viewSyllabus = function (){
  	
		$scope.showSyllabus = false;
		$scope.error = false;
		
		var month = $scope.searchForm.month;
		
		var data = {'month': month};
		$http.post("/viewSyllabus", data).success(function(data, status, headers, config){
			if (status == 200) {
				console.log(data);
				$scope.syllabusDetails = $sce.trustAsHtml(data);
				
			} else {
				$scope.error = true;
				$scope.errorMessage = "No Syllabus Found!";
    $scope.showSyllabus=false
			}
		}).error(function(data, status, headers, config) {
   $scope.showSyllabus=false
			$scope.error = true;
			$scope.errorMessage = "No Syllabus Found!";
	      });
		
		$scope.showSyllabus = true;
  
	}
	
	$scope.error = false;
	$scope.showSyllabus = false;
	

 
}


		