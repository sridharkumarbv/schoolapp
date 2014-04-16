function Marks($scope, $http, $location, $locale, $sce)  {
  var datetime = $locale.DATETIME_FORMATS;
	$scope.cal_months = datetime.MONTH;
	
	var d=new Date();
	$scope.current_month=d.getMonth();
	$scope.cal_dates = datetime.DATE;
	
	var d=new Date();
	$scope.current_date=d.getDate();
	console.log("hi");
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
 
	   
 $scope.$watch('formData.classname', function(){
	
     $scope.formData.section = $scope.formData.classname.Sections[0];
     $scope.formData.students = $scope.formData.classname.Students[0];
     $scope.formData.subject = $scope.formData.classname.Subjects[0];
     //$scope.formData.month = $scope.Months[0];
}) 

document.getElementById("generateMarks").onclick = function(){
          var over = document.getElementById("over");
          var pop = document.getElementById("pop");
          var viewmarks= document.getElementById("viewmarks");
          var add= document.getElementById("add");
          var viewMarks= document.getElementById("viewMarks");
          var generateMarks = document.getElementById("generateMarks");
          pop.style.display = "block";
          over.style.display = "block";
          document.getElementById("markView").style.display="none";
          //viewMarks.style.display = "none";
         document.getElementById("error").style.display="block";
          document.getElementById("success").style.display="block";
          
      };
      document.getElementById("Close").onclick = function(){
         var over = document.getElementById("over");
         var pop = document.getElementById("pop");
         var viewmarks= document.getElementById("viewmarks");
         var generateMarks = document.getElementById("generateMarks");
         over.style.display = "none";
         pop.style.display = "none";
         document.getElementById("success").style.display="none";
         document.getElementById("error").style.display="none";
         document.getElementById("markView").style.display="block";
       };

	$scope.addMarks = function(){
		var marks = $scope.formData;
		//console.log("syllbaus"+syllabus);
		var data = {};
		
		
		data.sclass = marks.classname.Name;
		//console.log(syllabus.clas);
		data.section = marks.section.Name;
		data.students = marks.students.Name;
		data.subject = marks.subject.Name;
		data.month = $scope.searchForm.month;
  //console.log("marksmonth"+data.month );
		data.marks = marks.text;
			/* $scope.showMarks = false;
   $scope.error = false;
		console.log(data);
		 */
		$http.post('/addMarks',  data).success(function(data, status, headers, config){
			//console.log("DATA  "+data['syllabus']);
			if (data.success == true) {
				marks = data[marks];
				//console.log("from report "+report);
				$scope.successMessage = "Marks Added Successfully";
				$scope.success = true;
				$scope.error = false;
				$scope.formData = {'classname':$scope.Classes[0], 'month': $scope.Months[0], 'subject': $scope.Classes[0].Subjects[0],'section': $scope.Classes[0].Sections[0],'students': $scope.Classes[0].Students[0]};
				//$scope.$apply(function() { $location.path("#/syllabus"); });
				 //$location.path("/report");
			} else {
				$scope.errorMessage = "No form submitted";
				$scope.error = true;
				$scope.success = false;
			}
		});
	}
	
$scope.clearAddMarks = function(){
		console.log("Called Clear Add Syllabus");
		$scope.errorMessage = "Form Cleared";
		$scope.error = true;
		$scope.success = false;
		$scope.formData = {'classname':$scope.Classes[0], 'section':$scope.Classes[0].Sections[0], 'students':$scope.Classes[0].Students[0], 'subject':$scope.Classes[0].Subjects[0], 'month': $scope.Months[0]};
	}
	$scope.viewMarks = function (){
		$scope.showMarks = false;
		$scope.error = false;
	    
  var viewmark = $scope.formData;
 	var data = {};
  data.sclass = viewmark.classname.Name;
	 data.section = viewmark.section.Name;  
  var month = $scope.searchForm.month;
		data = {'month': month };

		$http.post("/viewMarks", data).success(function(data, status, headers, config){
			if (status == 200) {
				console.log(data);
				$scope.marksDetails = $sce.trustAsHtml(data);
			} else {
    $scope.showMarks = false;
				$scope.error = true;
				$scope.errorMessage = "No Marks Found!";
			}
		}).error(function(data, status, headers, config) {
			$scope.error = true;
   $scope.showMarks = false;
			$scope.errorMessage = "No Marks Found!";
	      });
		
		$scope.showMarks = true;
	}
	
	$scope.error = false;
	$scope.showMarks = false;
 }