function Homework($scope, $http, $location, $locale, $sce)  {
  var datetime = $locale.DATETIME_FORMATS;
	 $scope.cal_months = datetime.MONTH;
	
	var d=new Date();
	$scope.current_month=d.getMonth();
	$scope.cal_dates = datetime.DATE;
	$scope.current_date=d.getDate();
	
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
	
     $scope.formData.section = $scope.formData.classname.Sections[0];
     $scope.formData.students = $scope.formData.classname.Students[0];
     $scope.formData.subject = $scope.formData.classname.Subjects[0];
     //$scope.formData.month = $scope.Months[0];
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
   
   document.getElementById("generateHomework").onclick = function(){
          var over = document.getElementById("over");
          var pop = document.getElementById("pop");
          //var viewreport= document.getElementById("viewreport");
          var add= document.getElementById("add");
          var viewHomework= document.getElementById("viewHomework");
          var generateHomework = document.getElementById("generateHomework");
          pop.style.display = "block";
          over.style.display = "block";
          document.getElementById("homeworkView").style.display="none";
          //viewHomework.style.display = "none";
         document.getElementById("error").style.display="block";
          document.getElementById("success").style.display="block";
          
      };
      document.getElementById("Close").onclick = function(){
         var over = document.getElementById("over");
         var pop = document.getElementById("pop");
         //var viewreport= document.getElementById("viewreport");
         var generateHomework = document.getElementById("generateHomework");
         over.style.display = "none";
         pop.style.display = "none";
         document.getElementById("success").style.display="none";
         document.getElementById("error").style.display="none";
         document.getElementById("homeworkView").style.display="block";
       };
 
		
	$scope.addHomework = function(){
		var homework = $scope.formData;
		//console.log("syllbaus"+syllabus);
		var data = {};
		
		data.sclass = homework.classname.Name;
		//console.log(syllabus.clas);
		data.section = homework.section.Name;
		data.subject = homework.subject.Name;
		data.Homeworkdate=homework.Homeworkdate;
		data.homework = homework.homework;
		
		console.log(data.homework);
		
		$http.post('/addHomework',  data).success(function(data, status, headers, config){
			//console.log("DATA  "+data['syllabus']);
			if (data.success == true) {
				homework = data[homework];
				//console.log("from report "+report);
				$scope.successMessage = "Homework Added Successfully";
				$scope.success = true;
				$scope.error = false;
				$scope.formData = {'classname':$scope.Classes[0], 'subject': $scope.Classes[0].Subjects[0],'section': $scope.Classes[0].Sections[0]};
				//$scope.$apply(function() { $location.path("#/syllabus"); });
				// $location.path("/report");
			} else {
				$scope.errorMessage = "No form submitted";
				$scope.error = true;
				$scope.success = false;
			}
		});
	}
	
$scope.clearAddHomework = function(){
		$scope.errorMessage = "Form Cleared";
		$scope.error = true;
		$scope.success = false;
		$scope.formData = {'classname':$scope.Classes[0], 'section':$scope.Classes[0].Sections[0], 'subject':$scope.Classes[0].Subjects[0]};
	}
	
$scope.viewHomework = function (){
		$scope.showHomework = false;
		$scope.error = false;
  
  var viewHomeworks = $scope.formData;
 	var data = {};
  data.sclass = viewHomeworks.classname.Name;
	 data.subject = viewHomeworks.subject.Name;
  data.section = viewHomeworks.section.Name;  
  var Homeworkdate = $scope.formData.Homeworkdate;
		var data = {'Homeworkdate': Homeworkdate};
		
$http.post("/viewHomework", data).success(function(data, status, headers, config){
			
   if (status == 200) {
				console.log(data);
				$scope.homeworkDetails = $sce.trustAsHtml(data);
			} else {
				$scope.error = true;
    $scope.showHomework = false;
				$scope.errorMessage = "No Homework Found!";
			}
		}).error(function(data, status, headers, config) {
			 $scope.error = true;
    $scope.showHomework = false;
			 $scope.errorMessage = "No Homework Found!";
	      });
		
		  $scope.showHomework = true;
	}
	
	   $scope.error = false;
	   $scope.showHomework = false;
 }