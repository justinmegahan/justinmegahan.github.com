var URL = "high"

var stateObject = 	{	"stateAverages" : [
						{"subject": "writing",	"scores": [3.9,3.8,3.9,4.0], "dataTitle": "FCAT Writing Score", "dataContent": "Average score of 10th grade students on the writing section of the FCAT."},
						{"subject": "science",	"scores": [304,302,306,307], "dataTitle": "FCAT Science Score", "dataContent": "Average score of 11th grade students on the science section of the FCAT."},
						{"subject": "math",		"scores": [327,327,331,329], "dataTitle": "FCAT Math Score", "dataContent": "Average score of 10th grade students on the math section of the FCAT."},
						{"subject": "reading",	"scores": [308,313,316,317], "dataTitle": "FCAT Reading Score", "dataContent": "Average score of 10th grade students on the reading section of the FCAT."}
					]};


var schoolObject =
		{ 	"spoto" : {
				"schoolName": "Spoto High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,3.9,3.7,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [293,294,301,293],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [316,319,312,325],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [282,291,286,292],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.884312, "longitude":-82.351914
			},
			"lennard" : {
				"schoolName": "Lennard High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.6,3.9,3.8,3.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [288,290,296,297],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [324,326,325,316],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [296,291,289,291],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.723045, "longitude":-82.40543
			},
			"steinbrenner" : {
				"schoolName": "Steinbrenner High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,4.1,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,330,332],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,347,343],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,337,329],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.1580082, "longitude":-82.5331128
			},
			"strawberry_crest" : {
				"schoolName": "Strawberry Crest High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.7,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,306,299],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,326,337],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,297,308],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0222878, "longitude":-82.2360134
			},
			"armwood" : {
				"schoolName": "Armwood High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.8,4.0,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [311,303,316,305],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [317,323,324,313],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [297,295,296,278],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.005076, "longitude":-82.297558
			},
			"alonso" : {
				"schoolName": "Alonso High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,4.0,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [309,300,312,312],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [331,329,332,326],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [313,308,310,305],		"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.021551, "longitude":-82.604132
			},
			"blake" : {
				"schoolName": "Blake High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.9,4.1,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [301,305,304,302],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [318,325,320,322],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [296,301,299,295],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.957029, "longitude":-82.468348
			},
			"brandon" : {
				"schoolName": "Brandon High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.9,3.8,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [305,305,308,309],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [322,324,328,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [305,300,301,297],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9441896, "longitude":-82.2998139
			},
			"chamberlain" : {
				"schoolName": "Chamberlain High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,3.8,3.7,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [299,298,307,306],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,319,321,319],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [283,292,294,288],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0355738, "longitude":-82.4664835
			},
			"durant" : {
				"schoolName": "Durant High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,4.1,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [320,310,319,319],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [329,331,336,330],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [310,312,315,305],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.888255, "longitude":-82.1752
			},
			"east_bay" : {
				"schoolName": "East Bay High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,4.0,4.0,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [314,308,315,304],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [322,319,321,319],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [303,294,296,295],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.7939164, "longitude":-82.363426
			},
			"freedom" : {
				"schoolName": "Freedom High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.0,3.9,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [321,303,323,316],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [337,332,331,332],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [315,312,308,307],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.1346602, "longitude":-82.3827596
		},



			"gaither" : {
				"schoolName": "Gaither High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.1,4.0,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [318,317,325,318],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [337,335,334,334],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [323,318,317,309],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.1030709, "longitude":-82.5039843
			},



			"hillsborough" : {
				"schoolName": "Hillsborough High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.1,3.8,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [319,317,320,311],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [328,329,326,323],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [311,313,308,313],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.991335, "longitude":-82.4557527
			},



			"king" : {
				"schoolName": "King High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,4.1,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [323,318,322,324],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [336,334,332,331],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [315,311,316,312],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0100198, "longitude":-82.3914822
			},



			"leto" : {
				"schoolName": "Leto High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.6,3.5,3.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [287,296,294,292],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,313,312,316],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [288,277,277,280],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0119634, "longitude":-82.518429
			},



			"middleton" : {
				"schoolName": "Middleton High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.6,3.6,3.7,3.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [299,293,300,291],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [312,314,322,307],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [275,280,284,262],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9906, "longitude":-82.431913
			},



			"newsome" : {
				"schoolName": "Newsome High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.3,4.1,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [338,335,342,340],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [345,345,348,350],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [336,333,336,337],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8579094, "longitude":-82.2044199
			},



			"riverview" : {
				"schoolName": "Riverview High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,3.9,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [310,309,312,316],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [333,331,333,335],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [323,315,317,313],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8518834, "longitude":-82.3120681
			},



			"plant" : {
				"schoolName": "Plant High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.2,4.2,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [333,331,338,336],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [350,350,351,347],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [349,339,347,338],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9236333, "longitude":-82.5028732
			},



			"plant_city" : {
				"schoolName": "Plant City High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,4.0,3.8,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [314,312,312,309],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [331,326,329,334],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [304,300,299,304],	"image": "reading.png",	"rank": "21st of 42"}],		
				"schoolBadges": [],
				"latitude": 27.9908558, "longitude":-82.1284205
			},


		
			"robinson" : {
				"schoolName": "Robinson High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,3.9,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [313,330,328,326],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [345,335,342,342],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [328,318,320,327],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8744684, "longitude":-82.5156511
			},


		
			"jefferson" : {
				"schoolName": "Jefferson High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,3.9,3.9,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [313,305,308,305],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [322,319,320,315],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [295,293,293,284],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.955165, "longitude":-82.520023
			},



			"bloomingdale" : {
				"schoolName": "Bloomingdale High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.2,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [327,321,328,333],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [338,340,342,337],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [327,322,326,319],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8937531, "longitude":-82.253624
			},



			"sickles" : {
				"schoolName": "Sickles High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.2,4.0,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [333,334,328,323],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [347,346,339,340],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [336,333,323,322],	"image": "reading.png",	"rank": "21st of 42"}],		
				"schoolBadges": [],
				"latitude": 28.0796196, "longitude":-82.5804547
			},



			"tampa_bay_tech" : {
				"schoolName": "Tampa Bay Tech High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.0,4.0,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [324,318,321,317],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [335,334,336,336],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [317,316,314,311],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0080757, "longitude":-82.3753708
			},



			"wharton" : {
				"schoolName": "Wharton High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,3.9,4.0,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [315,312,316,315],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [327,325,330,329],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,305,309,305],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.159178, "longitude":-82.357189
			},


		
			"pepin" : {
				"schoolName": "Pepin Academy",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.6,3.7,3.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [277,267,271,281],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [290,293,295,302],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [257,263,265,264],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.997072, "longitude":-82.4152359
			},



			"brooks-debartolo" : {
				"schoolName": "Brooks-DeBartolo Collegiate",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,3.9,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [291,287,305,296],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [332,321,322,331],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [308,299,300,298],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.052908, "longitude":-82.442899
			},


		
			"seminole_heights" : {
				"schoolName": "Seminole Heights Charter High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,null,null],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,null,260],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,null,280],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,null,246],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9818094, "longitude":-82.4594249
			},


		"new_point" : {
				"schoolName": "New Point Academy",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.9,3.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,null,296],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,324,329],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,300,307],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9379421, "longitude":-82.240954
			}
	};