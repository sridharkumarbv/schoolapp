function Report($scope, $http, $location, $locale, $sce)  {
  var datetime = $locale.DATETIME_FORMATS;
	 $scope.cal_months = datetime.MONTH;
	 
  var d=new Date();
	 $scope.current_month=d.getMonth();
	 console.log("report hi")
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
 
 document.getElementById("generateReport").onclick = function(){
          var over = document.getElementById("over");
          var pop = document.getElementById("pop");
          //var viewreport= document.getElementById("viewreport");
          var add= document.getElementById("add");
          var viewReport= document.getElementById("viewReport");
          var generateReport = document.getElementById("generateReport");
          pop.style.display = "block";
          over.style.display = "block";
          document.getElementById("reportView").style.display="none";
          //viewReport.style.display = "none";
         document.getElementById("error").style.display="block";
          document.getElementById("success").style.display="block";
          
      };
      document.getElementById("Close").onclick = function(){
         var over = document.getElementById("over");
         var pop = document.getElementById("pop");
         //var viewreport= document.getElementById("viewreport");
         var generateReport = document.getElementById("generateReport");
         over.style.display = "none";
         pop.style.display = "none";
         document.getElementById("success").style.display="none";
         document.getElementById("error").style.display="none";
         document.getElementById("reportView").style.display="block";
       };
 
	$scope.addReport = function(){
		var report = $scope.formData;
		var data = {};
		data.month = $scope.searchForm.month;
  console.log("month"+data.month );
		data.sclass = report.classname.Name;
		data.section = report.section.Name;
		data.students = report.students.Name;
		data.subject = report.subject.Name;
		//data.month = report.month;
  //console.log("datamonth"+data.month);
		data.report = report.text;

$http.post('/addReport',  data).success(function(data, status, headers, config){
			
			if (data.success == true) {
				report = data[report];
				console.log("from report "+report);
				$scope.successMessage = "Report Added Successfully....";
				$scope.success = true;
				$scope.error = false;
    $scope.formData = {'classname':$scope.Classes[0], 'month': $scope.Months[0], 'subject': $scope.Classes[0].Subjects[0],'section': $scope.Classes[0].Sections[0],'students': $scope.Classes[0].Students[0]};
				
			} else {
				$scope.errorMessage = "No form submitted";
				$scope.error = true;
				$scope.success = false;
			}
		});
	}
	
$scope.clearAddReport = function(){
		$scope.errorMessage = "Form Cleared";
		$scope.error = true;
		$scope.success = false;
		$scope.formData = {'classname':$scope.Classes[0], 'section':$scope.Classes[0].Sections[0], 'students':$scope.Classes[0].Students[0], 'subject':$scope.Classes[0].Subjects[0], 'month': $scope.Months[0]};
	}
	 
$scope.viewReport = function (){

		$scope.showReport = false;
		$scope.error = false;
  
  var viewreports = $scope.formData;
 	var data = {};
  data.sclass = viewreports.classname.Name;
	 data.subject = viewreports.subject.Name;  
  var month = $scope.searchForm.month;
		data = {'month': month };
		
$http.post("/viewReport", data).success(function(data, status, headers, config){
			
   if (status == 200) {
				console.log(data);
				$scope.reportDetails = $sce.trustAsHtml(data);
			} else {
				$scope.error = true;
				$scope.errorMessage = "No Report Found!";
    $scope.showReport=false;
    }
		}).error(function(data, status, headers, config) {
			$scope.error = true;
   $scope.showReport=false;
			$scope.errorMessage = "No Report Found!";
	      });
		
		 $scope.showReport = true;
	}
	
	  $scope.error = false;
	  $scope.showReport = false;

	

	
}


		