var Todo = require('./models/todo');
var user = require('./models/login');
var report = require('./models/student_report');
var marks = require('./models/student_marks');
var homework = require('./models/student_homework');
var teacher = require('./models/teacher_details');
var studentprofile=require('./models/student_details');
var syllabus=require('./models/teacher_syllabus');

module.exports = function(app) {
	
	var reports = 0;
	
app.get("/user", function(req, res){
	//res.flash('validation failed');
	res.render("index.html");
});

app.post('/uservalidation', function(req, res){
	 
	user.find({},function (err, details) {
		var noUsers = 0;
			for(i=0;i<details.length;i++)
			{
				if((req.body.email === details[i]._id) && (req.body.password === details[i].password) )
				{
					req.session.email = details[i]._id;
					req.session.name=details[i].name
					noUsers = noUsers+1;
					if(details[i].userid == "t"){
						teacher.findById({_id : req.session.email}, function(err, docs){
						if(err) res.json(err);
						else    res.render('teacher_home', {users: docs , login:req.session.name});
					});
					}
					else{
						console.log("session stored parent : "+req.session.email);
      studentprofile.findById({_id : req.session.email}, function(err, docs){
						if(err) res.json(err);
						else  
      {
      console.log("parent_home validation : "+docs.studentname);
      res.render('parent_home', {student: docs , login:req.session.name});
					}
     });
					}
				}
			}
			if(noUsers == 0){
					 res.redirect('/user');
				}
			});	
});




  app.get('/uservalidation', function(req, res){
	teacher.findById({_id : req.session.email}, function(err, docs){
		if(err) res.json(err);
		else    res.render('teacher_home', {users: docs, login: req.session.name});
	});
}); 

app.get('/uservalidationparent', function(req, res){
var name = req.params.name;
	studentprofile.findById({_id : req.session.email}, function(err, docs){
		if(err) res.json(err);
		else    res.render('parent_home', {student: docs, login: req.session.name});
	});
});
  
app.get('/changepassword', function(req, res){
	res.render("changepassword",{login : req.session.name});
});
app.post('/changepassword', function(req, res){
console.log("In change password");
	user.find({},function (err, details) {
			for(i=0;i<details.length;i++)
			{
				if((req.body.current_password === details[i].password) && 
					(req.body.new_password == req.body.confirm_password))
				{
					type = details[i].userid ;
					user.findByIdAndUpdate({_id: req.session.email},
	                 {
							password: req.body.new_password
					 }, function(err, docs){
					if(err){ 
					res.json({'success': false, 'error': err});
					}
					else{
					res.json({'success': true});
					}
					});
					
				}
				
			}
			});
	
});
app.get('/changepasswordparent', function(req, res){
	res.render("changepassword",{login : req.session.name});
});
app.post('/changepasswordparent', function(req, res){
	user.find({},function (err, details) {
			for(i=0;i<details.length;i++)
			{
				if((req.body.current_password === details[i].password) && 
					(req.body.new_password == req.body.confirm_password))
				{
					type = details[i].userid ;
					user.findByIdAndUpdate({_id: req.session.email},
	                 {
							password: req.body.new_password
					 }, function(err, docs){
					if(err) res.json(err);
					});
				}
				else{
					res.render("changepassword");
				}
			}
			});
	res.redirect('/uservalidationparent');	
});
/*Change Password End*/

/*parent view report*/
app.post("/parentviewreport", function(req, res){
	var temp = req.session.email;
	studentprofile.findById({_id : temp}, function(err,details){
     report.find({ $and: [{ sclass: details.studentclass}, {students : details.studentid},
                    {section: details.section},{subject : req.body.subject},
                    { month: req.body.month } ] }, function(err,docs){

			if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				console.log("success");
				res.render("parentreportview", {doc : docs});
			}
		});
    
	});
	});
/*parent view report end*/

/*parent view marks*/
app.post("/ParentviewMarks", function(req, res){
	console.log("from parent....View report "+req.session.email);
	var temp = req.session.email;
 console.log("email"+temp);
	studentprofile.findById({_id : temp}, function(err,details){

  
marks.find({ $and: [{ sclass: details.studentclass}, {students : details.studentid},{subject : req.body.subject},{section: details.section},
					  { month: req.body.month } ] } , function(err, docs){
				if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				console.log("success");
				res.render("pviewmark", {doc : docs});
			}
			});
		
	});
});

/*parent view marks end*/

/*parent view homework*/
app.post("/ParentHomework", function(req, res){
	console.log("from parent....View report "+req.session.email);
	var temp = req.session.email;
 console.log("email"+temp);
	studentprofile.findById({_id : temp}, function(err,details){
homework.find ({ $and: [{ sclass: details.studentclass},{subject : req.body.subject} ,{Homeworkdate:req.body.Homeworkdate} ,{section: details.section}] } , function(err, docs){
    if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				console.log("success");
				res.render("pviewhomework", {doc : docs});
			}
			});
		
	});
});
/*parent view homework*/
app.get("/pages/:name", function(req, res){
	var name = req.params.name;
 	 teacher.findById({_id : req.session.email}, function(err, docs){
		if(err) res.json(err);
		else    
  res.render('pages/'+name, {users: docs, login:req.session.name, doc:req.session.syllabusvalue,
                            reports:req.session.report,hmewrks: req.session.homework, marks:req.session.marks});
	}); 
}); 
  app.get("/partials/:name", function(req, res){
 var name = req.params.name;
	  studentprofile.findById({_id : req.session.email}, function(err, docs){
		if(err) res.json(err);
		else  {
  res.render('partials/'+name, {student: docs, login:req.session.name, rep:req.session.studentrep, 
                                marks: req.session.studentmark,hmewrks:req.session.studenthomework });
}
  });   
});
/*Editing Profile*/
app.post('/teachereditProfile', function(req, res){
					teacher.findByIdAndUpdate({_id: req.session.email},
	    {
							name: req.body.name,
							contact: req.body.contact,
							subject: req.body.subject,
							classes: req.body.classes
					}, function(err, docs){
					if(err) res.json(err);
					else res.redirect('/uservalidation');
					});	
});
/*Editing Profile End*/
app.get('/logout', function(req, res){
res.render("index.html");
});
/*Adding Report Teacher*/
app.post('/addReport', function(req, res){
	console.log("add month "+req.body.month);
	new report({
		sclass : req.body.sclass,
  section : req.body.section,
		students : req.body.students,
	 subject: req.body.subject,
		month: req.body.month,
		report: req.body.report
	
		
	}).save(function(err, doc){
		
		if(err){
			res.json({'success': false, 'error': err});
		} else{
			res.json({'success': true});
		}
	});
	});
 /*Adding report End Teacher*/
	app.post("/viewReport", function(req, res){
		report.find(
					  { month: req.body.month } ,function (err, docs) {
 
			if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				res.render("viewReport", {doc : docs});
			}
		});	
	});

/*report end*/
/*student profile*/
app.get('/studentprofile', function(req, res){
var temp=req.session.email;
	studentprofile.findById({_id : temp}, function(err, studentdetails){
		if(err) res.json(err);
		else 
{  
  req.session.student = studentdetails;
		res.redirect("/uservalidation#");
    }
	});
});
/*student profile end*/

/*Teacher Marks*/
app.post('/addMarks', function(req, res){
	new marks({
		sclass : req.body.sclass,
		section : req.body.section,
		students : req.body.students,
	 subject: req.body.subject,
		month: req.body.month,
		marks: req.body.marks
	
		
	}).save(function(err, doc){
		
		if(err){
			res.json({'success': false, 'error': err});
		} else{
			res.json({'success': true});
		}
	});
	});
app.post("/viewMarks", function(req, res){
		marks.find({ month: req.body.month} ,function (err, docs) {
			if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				res.render("viewMarks", {doc : docs});
			}
		});	
	});
/*Teacher Marks end*/

/*Teacher Homework Submission*/
app.post('/addHomework', function(req, res){
	console.log("homework howmework : "+req.body.homework);
	new homework({
		sclass : req.body.sclass,
		section : req.body.section,
	 subject: req.body.subject,
  Homeworkdate:req.body.Homeworkdate,
		homework: req.body.homework
	}).save(function(err, doc){
		
		if(err){
			res.json({'success': false, 'error': err});
		} else{
			res.json({'success': true});
		}
	});
	});

/*Teacher Homework Submission End*/



app.post("/viewHomework", function(req, res){
		homework.find(
					  { Homeworkdate: req.body.Homeworkdate } ,function (err, docs) {
			if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				res.render("viewHomework", {doc : docs});
			}
		});	
	});
/*add Syllabus*/
app.post('/addSyllabus', function(req, res){

 console.log("add syllabus "+req.body.month);
	new syllabus({
		sclass : req.body.sclass,
  subject: req.body.subject,
		month: req.body.month,
		syllabus: req.body.syllabus
	
		
	}).save(function(err, doc){
		
		if(err){
			res.json({'success': false, 'error': err});
		} else{
			res.json({'success': true});
		}
	});
	});

 app.post("/viewSyllabus", function(req, res){
		syllabus.find( { month: req.body.month}, function(err,docs){
			if(err || docs.length == 0){
				res.status(404);
				res.json(err);
			}
			else 
			{
				res.render("viewSyllabus", {doc : docs});
			}
		});	
	});
	
/*Add Syllabus end*/
app.get('*', function(req, res) {
		res.render('index.html');
	});
  }