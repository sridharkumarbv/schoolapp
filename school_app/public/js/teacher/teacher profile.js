function teacherProfile($scope, $http, $location, $locale, $sce)  {

$scope.Classes=[
 { "Name":"Class","Sections":[
      {"Name":"Section "}],
	  "Students":[
      {"Name":"Students"}],"Subjects":[{"Name":"Select Subject"}]
      },
    { "Name":"1","Sections":[
      { "Name":"A"},
      { "Name":"B"}
      ],
	  "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"2","Sections":[
      { "Name":"A"},
      { "Name":"B"}
     ], "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"3","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],
	   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"4","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"5","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
	  {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"6","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"7","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"8","Sections":[
      { "Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"9","Sections":[
      {"Name":"A"},
      { "Name":"B"},
      { "Name":"C"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]},
	  { "Name":"10","Sections":[
      { "Name":"A"},
      {"Name":"B"},
      { "Name":"C"},
	  { "Name":"D"}],   "Students":[
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
      ],"Subjects":[{"Name":"English"},
	  {"Name":"Telugu"},
   {"Name":"Hindi"},
	  {"Name":"Maths"},
	  {"Name":"Science"},
	  {"Name":"Social"}]}
	  ] ;
   
    $scope.$watch('formData.classname', function(){
	
	$scope.formData.section = $scope.formData.classname.Sections[0];
	$scope.formData.students = $scope.formData.classname.Students[0];
	$scope.formData.subject = $scope.formData.classname.Subjects[0];
	$scope.formData.month = $scope.Months[0];
})
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
 
$scope.teachereditprofile = function(){
		var teacherprofile = $scope.formData;
		var data = {};
		
		data.name = teacherprofile.name;
		data.contact = teacherprofile.contact;
		data.subject = teacherprofile.subject;
  data.classes = teacherprofile.classes;
  
  $http.post('/teachereditprofile',  data).success(function(data, status, headers, config){
			
     if (data.success == true) {
       teacherprofile = data[teacherprofile];
     
				   $scope.successMessage = "Profile Updated Successfully";
				   $scope.success = true;
				   $scope.error = false;
			  } else {
       $scope.errorMessage = "Profile Updated Successfully";
       $scope.error = true;
       $scope.success = false;
			   }
		});
}
}