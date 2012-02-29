var URL = "high"

var stateObject = 	{	"stateAverages" : [
						{"subject": "writing",	"scores": [3.9,3.8,3.9,4.0], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "science",	"scores": [304,302,306,307], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "math",		"scores": [327,327,331,329], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "math description"},
						{"subject": "reading",	"scores": [308,313,316,317], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "reading description"}
					]};


var schoolObject =
		{ 	"bayside" : {
				"schoolName": "Bayside High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [2.6,3.0,2.5,3.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [241,228,227,210],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [280,263,238,257],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [245,225,237,222],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.903323, "longitude":	-82.699096	
			},
			"boca_ciega" : {
				"schoolName": "Boca Ciega High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.5,3.7,3.7,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [271,266,287,289],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [309,312,314,317],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [283,284,286,286],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude":27.761837 , "longitude":-82.711057
			},
			"clearwater" : {
				"schoolName": "Clearwater High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,4.0,3.8,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [292,293,297,287],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [323,324,321,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [301,304,299,300],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9595807, "longitude":-82.7556968
			},
			"countryside" : {
				"schoolName": "Countryside High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.9,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [296,298,298,299],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [329,326,333,335],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [311,307,308,313],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude":28.0232822 , "longitude":-82.7113866
			},
			"hollins" : {
				"schoolName": "Dixie M. Hollins High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.7,3.9,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [275,282,288,283],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [314,312,313,312],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [285,282,286,282],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8159372, "longitude": -82.7205744
			},
			"dunedin" : {
				"schoolName": "Dunedin High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,4.0,3.8,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [307,293,295,296],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [327,321,327,321],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,302,304,305],		"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.028571, "longitude":-82.7695724
			},
			"gibbs" : {
				"schoolName": "Gibbs High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,3.7,3.9,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [279,284,280,275],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [310,304,307,309],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [290,280,284,287],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.7614164, "longitude":-82.6775995
			},
			"lakewood" : {
				"schoolName": "Lakewood High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,4.0,3.9,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [304,292,310,306],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [325,321,322,319],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [309,301,304,302],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.7183627, "longitude":-82.6525988
			},
			"largo" : {
				"schoolName": "Largo High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.7,3.9,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [293,281,291,299],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [321,319,327,326],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [298,296,304,298],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9197438, "longitude":-82.7859354
			},
			"northeast" : {
				"schoolName": "Northeast High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.7,3.7,3.8,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [280,292,290,293],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [311,320,322,320],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [292,294,297,297],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8228032, "longitude":-82.6556544
			},
			"pinellas_secondary" : {
				"schoolName": "Pinellas Secondary School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.6,2.9,3.1,2.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,247,219,225],		"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [295,296,260,287],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [294,283,247,257],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8497969, "longitude":-82.728643
			},	
			"osceola" : {
				"schoolName": "Osceola High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.0,4.3,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [296,307,311,313],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [336,334,344,345],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [317,315,331,327],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude":27.860686, "longitude":-82.77458
			},	
			"pinnellas_park" : {
				"schoolName": "Pinellas Park High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.8,3.8,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [292,281,293,293],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [317,318,324,323],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [293,291,300,298],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8808567, "longitude":-82.7242671
			},	
			"st_petersburg" : {
				"schoolName": "St. Petersburg High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.1,4.2,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [315,311,311,319],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [336,334,342,338],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [333,321,339,332],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.777805, "longitude":-82.667877
			},	
			"seminole" : {
				"schoolName": "Seminole High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,3.9,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [321,319,320,320],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [336,335,342,337],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [323,313,323,317],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.8492678, "longitude":-82.8195838
			},	
			"tarpon_springs" : {
				"schoolName": "Tarpon Springs High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,4.0,4.0,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [306,309,315,314],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [327,326,332,330],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [315,311,320,311],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.1449646, "longitude":-82.7775419
			},	
			"palm_harbor" : {
				"schoolName": "Palm Harbor University High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.5,4.3,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [335,338,343,343],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [355,357,358,355],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [352,352,354,348],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.08396, "longitude":-82.760777
			},
			"east_lake" : {
				"schoolName": "East Lake High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.4,4.2,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [315,312,327,325],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [342,346,345,348],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [333,332,335,334],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.127931, "longitude":-82.69956
			},
			"childrens_center" : {
				"schoolName": "The Children's Center",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.1,3.1,2.5,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [224,238,251,227],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [275,274,277,283],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [244,247,234,253],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.919618, "longitude":-82.769557
			},
			"hospital_homebound" : {
				"schoolName": "Hospital Homebound",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.2,3.6,3.5,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [287,267,260,302],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [324,305,330,310],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [303,277,309,268],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude":27.9569088, "longitude":-82.7552073
			},	
			"st_petersburg_collegiate" : {
				"schoolName": "St. Petersburg Colligate",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.3,4.1,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [356,357,362,354],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [358,357,360,367],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [370,359,352,347],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude":27.777391 , "longitude":-82.72853
			},
			"mavericks" : {
				"schoolName": "Mavericks Charter High School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.0,3.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,262,253],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,275,287],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,242,252],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 27.9165695, "longitude":-82.7760091
			},
			"life_skills_north" : {
				"schoolName": "Life Skills North",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,2.5,2.8,3.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,225,230,241],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,280,276,266],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,233,237,239],	"image": "reading.png",	"rank": "21st of 42"}],
				"schoolBadges": [],
				"latitude": 28.0104724, "longitude":-82.7093176
			}
		};