
//******************** VARIABLES \ OBJECTS ************************************************

var bio = {
	"name" : "Luca Pelli",
	"role" : "IT Manager",
	"contacts" : {
      	"mobile": "+39 3403168012",
      	"email": "lucmcpelli@gmail.com",
      	"github": "scozmcluc",
      	"blog":"noborders",
      	"twitter": "@lucmcpelli",
      	"location": "Reggio Emilia, Italy"
     },
	"welcomeMessage": "",
	"skills": [
		{
			"skill":"Python",
		},
		{
			"skill":"Javascript",
		},
		{
			"skill":"Jquery",
		},
		{
			"skill":"Html5",
		},
		{
			"skill":"Mysql",
		}

	],

	"biopic": "images/me.jpg",
	"display": function displayBio() {

		// name , lastname and role
		$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
		$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

		// contact info
		$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
		$('#topContacts').append(HTMLblog.replace("%data%", bio.contacts.blog));
		$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));


		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		//skills
		// var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
		// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
		$('#header').append(HTMLskillsStart);

		for (skill in bio.skills) {

			var skillhtml = HTMLskills.replace("%data%", bio.skills[skill].skill);
			$('#skills').append(skillhtml.replace("%logo%", bio.skills[skill].logo))
		}

	}
};

var education = {
	"schools": [
		{
			"name": "Università di Bologna",
			"location": "Bologna",
			"degree": "Phisics",
			"majors": ["109"],
			"dates": 1992,
			"url": "http://www.fisica-astronomia.unibo.it/it"
		},

		{
			"name": "Istituto Tecnico Industriale Leopoldo Nobili",
			"location": "Reggio Emilia",
			"degree": "Perito Tecnico Industriale",
			"majors": ["52"],
			"dates": 1986,
			"url": "http://www.iisnobili.gov.it/"
		}

	 ],
	"onlineCourses": [
		{
			"title": "Learn To program:The fundamentals",
		    "school": "Coursera",
		    "date": 2012,
		    "url": "https://www.coursera.org"
		},
		{
			"title": "Front-End Web Developer Nanodegree",
		    "school": "Udacity",
		    "date": 2015,
		    "url": "https://www.udacity.com"
		}

	],
	display: function displayEducation() {
		if (education.schools === undefined || education.schools.length < 0) {
			return;
		}

		for (school in education.schools) {

			HTMLschoolName.replace("%data%", education.schools[school].name) + 	HTMLschoolDegree.replace("%data%", education.schools[school].degree)


			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append( HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree) );
			$('.education-entry:last').append( HTMLschoolDates.replace("%data%", education.schools[school].dates) );
			$('.education-entry:last').append( HTMLschoolLocation.replace("%data%", education.schools[school].location) );
			$('.education-entry:last').append( HTMLschoolMajor.replace("%data%", education.schools[school].majors) );
		}

		if (education.onlineCourses === undefined || education.onlineCourses.length < 0) {
			return;
		}


		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		for (course in education.onlineCourses) {

			var titlehtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

			$('.education-entry:last').append( titlehtml.replace("%courseurl%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school) );
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
			$('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));

		}

	}
};


var work = {
	"jobs":
	    [{
	     	"employer": "Max Mara Fashion Group",
	     	"title": "IT Manager",
	     	"location": "Reggio Emilia",
	     	"dates": "2013-now",
	     	"description": "- IT Manager of the digital division of the company"
	    },
	    {
	    	"employer": "Divina srl",
	     	"title": "IT manager",
	     	"location": "Reggio Emilia",
	     	"dates": "1996-2011",
	     	"description": "- IT manager of an international fashion company"
	    }],

	"display": function displayWork() {
		if (work.jobs === undefined || work.jobs.length < 0) {
			return;
		}

		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

		}
	}
};


var projects = {
	"projects": [
		{
		  "title": "Connessioni Didattiche",
	      "dates": "2014" ,
	      "description": "Web site for an education company who promotes programming and robotics in schools. I used Wordpress as a framework",
	      "images": ["images/connessioni-didattiche_logo-crop_400x100.png"]
		}
	],
	"display": function displayProjects() {
		if (projects.projects === undefined || projects.projects.length < 0) {
			return;
		}

		var proj = projects.projects;
		for (p in proj) {

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj[p].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", proj[p].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", proj[p].description));

			if (proj[p].images !== undefined && proj[p].images.length > 0) {

				for (img in proj[p].images) {

					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", proj[p].images[img]));
				}

			}
		}

	}
};

//***************** GENERAL FLOW ********************************************************************************

//bind scroll event to navigation panel
$("#nav a").bind("click",scrollPage);

// build bio section
bio.display();

//build working section
work.display();

//build project section
projects.display();

//build education section
education.display();

//build map
$("#mapDiv").append(googleMap);
initializeMap();

//display footer
displayFooter(bio.contacts);


//*************** FUNCTIONS ************************************************************************************

function displayFooter(contact_list) {
	if (contact_list === undefined || contact_list.length < 0) {
		return;
	}

	$('#footerContacts').append(HTMLmobile.replace("%data%", contact_list.mobile));
	$('#footerContacts').append(HTMLemail.replace("%data%", contact_list.email));
	$('#footerContacts').append(HTMLtwitter.replace("%data%", contact_list.twitter));
	$('#footerContacts').append(HTMLgithub.replace("%data%", contact_list.github));
	$('#footerContacts').append(HTMLblog.replace("%data%", contact_list.blog));
	$('#footerContacts').append(HTMLlocation.replace("%data%", contact_list.location));
}

function inName() {

	var namearr = bio.name.split(" ");
	var fname 	= namearr[0].toLowerCase();
	var lname 	= namearr[1].toUpperCase();

	namearr[0]	= fname[0].toUpperCase() + fname.slice(1);
	namearr[1]	= namearr[1].toUpperCase();
	console.log(namearr.join(" "));
	return namearr.join(" ");
}


function scrollPage(e) {
	e.preventDefault();
	var target = $("#"+$(this).attr("href").replace("#",""));

	$("html, body").stop().animate({
		scrollTop: target.offset().top

	}, 1000);

}