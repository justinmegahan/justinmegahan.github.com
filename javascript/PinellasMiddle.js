var URL = "middle"

var stateObject = 	{	"stateAverages" : [
						{"subject": "writing",	"scores": [3.9,3.8,3.9,4.0], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "science",	"scores": [304,302,306,307], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "math",		"scores": [327,327,331,329], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "math description"},
						{"subject": "reading",	"scores": [308,313,316,317], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "reading description"}
					]};

var schoolObject =
		{ 	"azalea" : {
				"schoolName": "Azalea Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.9,3.8,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [274,269,280,272],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [303,299,301,292],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [293,269,280,272],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.7928041, "longitude":	-82.74649	
			},
			"largo" : {
				"schoolName": "Largo Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.3,4.0,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [293,298,298,293],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [321,320,316,304],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,298,298,293],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9083555, "longitude": -82.783991	
			},
			"bay_point" : {
				"schoolName": "Bay Point Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.3,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [298,299,300,282],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [321,322,319,305],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [317,299,300,282],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":27.7128073 , "longitude":	-82.6617656	
			},
			"carwise" : {
				"schoolName": "Joseph L. Carwise Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.5,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [338,345,341,338],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [349,355,346,340],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [340,345,341,338],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.088471, "longitude":	-82.727337	
			},
			"clearwater_fundamental" : {
				"schoolName": "Clearwater Fundamental Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,5.2,4.9,4.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [345,341,336,342],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [349,352,343,345],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [347,341,336,342],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.972736, "longitude":		-82.743425
			},
			"hamilton_disston" : {
				"schoolName": "Hamilton Disston School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,2.7,3.0,3.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,225,214],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,248,256],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,225,214],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.760103, "longitude":	-82.702849	
			},
			"dunedin_highland" : {
				"schoolName": "Dunedin Highland Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.1,3.8,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [296,297,289,293],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [323,319,311,310],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [313,297,289,293],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9990711, "longitude": -82.7755475		
			},
			"fitzgerald" : {
				"schoolName": "Fitzgerald Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.2,3.9,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [291,291,299,299],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [314,316,314,312],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [299,291,299,299],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8781559, "longitude":	-82.7257419	
			},
			"hunsinger" : {
				"schoolName": "Calvin A. Hunsinger Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.0,null,2.6,2.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [248,null,239,219],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [289,null,271,240],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [253,null,239,219],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9879745, "longitude":	-82.7835571	
			},
			"lealman" : {
				"schoolName": "Lealman Intermediate",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,3.8,3.7,3.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [237,229,254,231],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [275,277,284,272],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [268,229,254,231],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.815811, "longitude":	-82.671599	
			},
			"madeira_beach" : {
				"schoolName": "Madeira Beach Fundamental",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.3,4.2,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [310,317,339,339],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [324,330,344,334],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [316,317,339,339],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.810581, "longitude":-82.7892689		
			},
			"meadowlawn" : {
				"schoolName": "Meadowlawn Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.3,4.2,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [290,292,296,298],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [317,312,318,307],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [303,292,296,298],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8273474, "longitude":-82.655048	
			},
			"modesta_robbins" : {
				"schoolName": "Modesta Robbins Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,4.3,4.1,3.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,309,266,281],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,325,314,317],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,309,266,281],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9658919, "longitude":	-82.7089757	
			},
			"pinellas_secondary" : {
				"schoolName": "Pinellas Secondary School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,3.5,3.3,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,239,236,238],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,282,275,259],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [245,239,236,238],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8497211, "longitude":	-82.7289873	
			},
			"oak_grove" : {
				"schoolName": "Oak Grove Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.5,4.0,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [311,310,304,309],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [326,324,320,319],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [322,310,304,309],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9472087, "longitude":	-82.7464311	
			},
			"osceola" : {
				"schoolName": "Osceola Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.4,4.3,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [307,309,308,317],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [336,331,328,327],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [319,309,308,317],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.856022, "longitude":	-82.773622	
			},
			"palm_harbor" : {
				"schoolName": "Palm Harbor Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.8,4.7,4.2,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [319,318,322,321],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [337,333,336,328],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [332,318,322,321],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.06835, "longitude":	-82.7531568	
			},
			"clearwater_intermediate" : {
				"schoolName": "Clearwater Intermediate",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.5,3.6,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [258,249,252,273],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [297,290,289,301],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [273,249,252,273],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.977288, "longitude":	-82.786705	
			},
			"pinellas_park" : {
				"schoolName": "Pinellas Park Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.9,3.8,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [293,283,285,279],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [318,315,311,293],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [302,283,285,279],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8344694, "longitude":	-82.7331562	
			},
			"saftery_harbor" : {
				"schoolName": "Safety Harbor Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.5,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [339,340,337,329],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [351,351,346,336],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [335,340,337,329],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0001698, "longitude": -82.6881596		
			},
			"seminole" : {
				"schoolName": "Seminole Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.3,4.1,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [344,337,333,325],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [355,345,343,330],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [339,337,333,325],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.851959, "longitude":	-82.817793	
			},
			"hopkins" : {
				"schoolName": "John Hopkins Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,4.0,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [290,279,287,292],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [316,308,311,308],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,279,287,292],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.763251, "longitude":	-82.65664	
			},
			"tarpon_springs" : {
				"schoolName": "Tarpon Springs Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.4,4.2,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [319,318,316,320],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [337,333,328,326],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [329,318,316,320],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.1527911, "longitude": -82.7803799		
			},
			"tyrone" : {
				"schoolName": "Tyrone Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.0,3.9,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [274,264,273,280],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [303,299,302,302],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [297,264,273,280],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.791911, "longitude":	-82.7241938	
			},
			"thurgood_marshall" : {
				"schoolName": "Thurgood Marshall Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.1,3.8,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [295,299,305,320],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,314,318,318],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,299,305,320],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.749649, "longitude":	-82.687137	
			},
			"florida_virtual" : {
				"schoolName": "Florida Virtual Instruction Program",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.7,3.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,331,312],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,320,309],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,331,312],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9140363, "longitude":	-82.7934408	
			},
			"athenian" : {
				"schoolName": "Athenian Academy",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.9,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,313,313],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,318,309],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,313,313],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.04982, "longitude":	-82.776414	
			},
			"pinellas_prep" : {
				"schoolName": "Pinellas Prepatory Academy",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,3.9,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [311,326,329,329],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [327,333,339,338],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [318,326,329,329],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.895576, "longitude":	-82.7469349	
			},
			"plato" : {
				"schoolName": "Plato Academy Charter School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,null,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,null,341],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,null,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,null,341],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.961574, "longitude":	-82.733998	
			}
		};