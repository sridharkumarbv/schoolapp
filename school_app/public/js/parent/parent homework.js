function parentHomework($scope, $http, $location, $locale, $sce)  {
  var datetime = $locale.DATETIME_FORMATS;
	 $scope.cal_months = datetime.MONTH;
  
  var d=new Date();
	 $scope.current_month=d.getMonth();
  
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
 
$scope.ParentHomework=function(){
	 $scope.showhomework = false;
		$scope.error = false;
	    
         
		var Homeworkdate = $scope.formData.Homeworkdate;
  var subject =$scope.formData.subject.Name;
		
		var data = {'Homeworkdate': Homeworkdate, 'subject' : subject};
		$http.post("/ParentHomework", data).success(function(data, status, headers, config){
			if (status == 200) {
				console.log(data);
				$scope.homeworkDetails = $sce.trustAsHtml(data);
			} else {
				$scope.error = true;
				$scope.errorMessage = "No Homework Found!";
    $scope.showhomework=false;
    }
		}).error(function(data, status, headers, config) {
			$scope.error = true;
   $scope.showhomework=false;
			$scope.errorMessage = "No Homework Found in the selected subject.";
   
	      });
       
		
		$scope.showhomework = true;
	}
	
	$scope.error = false;
	$scope.showhomework = false;
}