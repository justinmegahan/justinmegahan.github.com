var URL = "middle"

var stateObject = 	{	"stateAverages" : [
						{"subject": "writing",	"scores": [4.2,4.3,4.1,4.2], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "science",	"scores": [305,305,310,315], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "math",		"scores": [324,322,324,325], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "math description"},
						{"subject": "reading",	"scores": [310,305,310,315], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "reading description"}
					]};


var schoolObject =
			{ "adams" : {
				"schoolName": "Adams Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.4,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [299,298,313,306],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [328,322,327,327],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,298,313,306],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.04222, "longitude":-82.46565	
			},
			
			 "giunta" : {
				"schoolName": "Giunta Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.7,4.3,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [288,298,294,295],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [314,315,307,310],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [299,298,294,295],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9107312, "longitude": -82.3582584	
			},
			 "shields" : {
				"schoolName": "Shields Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.1,4.0,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [276,278,291,289],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [314,311,318,310],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [286,278,291,289],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.737237, "longitude": -82.369562		
			},
			 "carver" : {
				"schoolName": "Carver Exceptional Center",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.0,2.8,3.0,2.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [213,192,205,260],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [260,217,243,265],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [233,192,205,260],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.997007, "longitude":	-82.4270389	
			},
			 "smith" : {
				"schoolName": "Smith Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,4.9,4.7,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,314,324,317],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,329,334,328],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,314,324,317],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0773577, "longitude": -82.5742112	
			},
			"pierce" : {
				"schoolName": "Pierce Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.2,4.3,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [274,274,277,287],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [309,300,305,305],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [289,274,277,287],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.998221, "longitude":	-82.517656
			},
			"barrington" : {
				"schoolName": "Barrington Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,4.5,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,309,321],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,320,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,309,321],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8482391, "longitude":	-82.2567874	
			},
			"bartels" : {
				"schoolName": "Bartels Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.7,5.1,4.6,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [316,322,327,335],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [329,330,333,328],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [310,322,327,335],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.168664, "longitude":	-82.350667	
			},
			"benito" : {
				"schoolName": "Benito Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.8,5.0,4.7,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [327,330,338,339],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [341,337,340,338],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [326,330,338,339],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":28.140404 , "longitude":		-82.324755
			},
			"stewart" : {
				"schoolName": "Stewart Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.7,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [304,306,323,324],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [325,317,331,328],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [301,306,323,324],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.960384, "longitude":	-82.471466	
			},
			"mclane" : {
				"schoolName": "McLane Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.1,4.3,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [283,275,284,290],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [306,301,304,296],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [291,275,284,290],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0068325, "longitude":-82.2777339		
			},
			"buchanan" : {
				"schoolName": "Buchanan Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.5,4.5,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [290,273,293,288],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [313,304,310,304],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [295,273,293,288],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":28.0891826, "longitude":	-82.4687057	
			},
			"burnett" : {
				"schoolName": "Burnett Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.6,4.4,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [301,296,305,311],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [323,316,321,323],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [304,296,305,311],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0068325, "longitude":	-82.2777339	
			},
			"burns" : {
				"schoolName": "Burns Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.1,4.9,4.6,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [335,348,347,350],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [346,347,345,350],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [330,348,347,350],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9081726, "longitude":	-82.2771963	
			},
			"van_buren" : {
				"schoolName": "Van Buren Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,4.2,3.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [262,260,276,265],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [294,290,296,289],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [275,260,276,265],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0294631, "longitude":	-82.4339829	
			},
			"dowdell" : {
				"schoolName": "Dowdell Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.4,4.0,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [277,286,283,281],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [307,307,300,301],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [293,286,283,281],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9366926, "longitude":	-82.3724558	
			},
			"coleman" : {
				"schoolName": "Coleman Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.8,4.9,5.1,4.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [333,336,344,353],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [348,346,348,350],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [334,336,344,353],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.927939, "longitude":	-82.517586	
			},
			"davidsen" : {
				"schoolName": "Davidsen Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.7,4.8,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [308,313,328,314],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [331,327,333,321],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [307,313,328,314],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.053651, "longitude":	-82.597167	
			},
			"eisenhower" : {
				"schoolName": "Eisenhower Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.8,4.7,4.4,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [295,300,306,307],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,315,321,315],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [301,300,306,307],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.793321, "longitude":	-82.364739	
			},
			"farnell" : {
				"schoolName": "Farnell Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,5.0,4.9,4.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [318,324,337,340],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [335,335,341,336],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [319,324,337,340],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.072364, "longitude":		-82.635058
			},
			"sligh" : {
				"schoolName": "Sligh Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.4,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [258,266,259,263],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [296,294,295,284],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [277,266,259,263],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.008779, "longitude":	-82.436813	
			},
			"franklin" : {
				"schoolName": "Franklin Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.3,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [255,252,266,271],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [301,294,303,302],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [280,252,266,271],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":27.969464, "longitude":	-82.416154	
			},
			"greco" : {
				"schoolName": "Greco Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.3,3.9,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [271,277,282,277],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [305,301,307,304],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [288,277,282,277],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.053066, "longitude":	-82.376596	
			},
			"hill" : {
				"schoolName": "Hill Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,4.8,4.6,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [315,320,322,313],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [331,332,330,319],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [316,320,322,313],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.082996, "longitude":	-82.537074	
			},
			"jennings" : {
				"schoolName": "Jennings Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.0,4.1,4.0,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [267,279,280,276],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [301,310,310,308],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [286,279,280,276],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.026279, "longitude":-82.327617	
			},
			"monroe" : {
				"schoolName": "Monroe Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.3,4.0,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [291,290,289,290],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,314,317,317],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [299,290,289,290],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":27.875723, "longitude":-82.523526
			},
			"liberty" : {
				"schoolName": "Liberty Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.9,4.7,4.5,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [337,331,334,337],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [347,343,338,344],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [327,331,334,337],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.1334865, "longitude":-82.3828697		
			},
			"madison" : {
				"schoolName": "Madison Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.3,4.1,4.2,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [266,267,285,290],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [304,300,305,306],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [288,267,285,290],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.906703, "longitude":-82.520719	
			},
			"mann" : {
				"schoolName": "Mann Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,4.8,4.6,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [316,328,331,326],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [326,332,331,325],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [315,328,331,326],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.950519, "longitude":	-82.280699	
			},
			"marshall" : {
				"schoolName": "Marshall Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.5,4.3,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [286,306,307,305],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [313,321,319,316],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [291,306,307,305],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.016455, "longitude":	-82.107113	
			},
			"martinez" : {
				"schoolName": "Martinez Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.3,5.3,5.1,5.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [357,354,357,363],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [350,351,354,355],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [336,354,357,363],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.1614408, "longitude":	-82.5329447	
			},
			"memorial" : {
				"schoolName": "Memorial Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.1,3.8,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [277,272,277,278],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [306,297,304,299],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [286,272,277,278],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9883, "longitude":-82.457157		
			},
			"ferrell" : {
				"schoolName": "Ferrell Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.2,4.6,4.1,4.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [277,291,284,286],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [315,312,312,318],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [298,291,284,286],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.984147, "longitude":	-82.433199	
			},
			"mulrennan" : {
				"schoolName": "Mulrennan Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.5,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [328,327,332,332],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [338,334,336,336],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [326,327,332,332],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9067157, "longitude": -82.2294618		
			},
			"orange_grove" : {
				"schoolName": "Orange Grove Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.4,4.7,4.5,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [304,291,314,315],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [323,316,321,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [310,291,314,315],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9752986, "longitude": -82.440372	
			},
			"tomlin" : {
				"schoolName": "Tomlin Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.7,4.6,4.4,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [296,304,308,321],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [327,323,326,332],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [305,304,308,321],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.018, "longitude":-82.147233		
			},
			"progress_village" : {
				"schoolName": "Progress Village Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.3,4.1,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [306,312,316,312],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [323,324,324,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [311,312,316,312],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.8928019, "longitude": -82.3664817		
			},
			"randall" : {
				"schoolName": "Randall Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.9,4.9,4.9,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [345,351,357,363],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [350,352,354,354],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [334,351,357,363],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.857981, "longitude":	-82.2073489
			},
			"rodgers" : {
				"schoolName": "Rodgers Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.6,4.2,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [318,321,306,311],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [326,327,319,318],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [315,321,306,311],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":27.8432953, "longitude":-82.301547		
			},
			"roland_park" : {
				"schoolName": "Roland Park Country School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.5,4.1,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [282,267,279,267],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [317,303,310,293],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [297,267,279,267],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9566877, "longitude":	-82.5187068
			},
			"rampello" : {
				"schoolName": "Rampello Downtown Partnership School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.7,4.5,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [307,315,320,321],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [328,326,327,333],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [318,315,320,321],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9478209, "longitude":	-82.4529433	
			},
			"dorothy_thomas" : {
				"schoolName": "Dorothy Thomas Center",
				"schoolScores": [
					{"subject": "writing",	"scores": [2.7,2.2,2.8,2.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,null,214],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [265,218,252,218],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [252,null,null,214],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0693945, "longitude":-82.4951954		
			},
			"north_tampa" : {
				"schoolName": "North Tampa Alternative",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.3,3.0,3.2,3.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [210,190,221,231],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [264,244,263,260],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [239,190,221,231],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0298465, "longitude":	-82.4842266	
			},
			"brandon" : {
				"schoolName": "Brandon Alternative",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.4,3.3,3.3,3.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [240,238,229,255],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [270,278,287,280],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [247,238,229,255],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.006987, "longitude":	-82.286015	
			},
			"webb" : {
				"schoolName": "Webb Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,4.0,3.9,4.3],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [276,285,297,295],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [311,305,314,314],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [287,285,297,295],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0023896, "longitude":-82.5621002		
			},
			"turkey_creek" : {
				"schoolName": "Turkey Creek Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.5,4.1,4.4],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [295,297,302,311],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [318,319,319,314],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [301,297,302,311],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9436348, "longitude":-82.1706441		
			},
			"walker" : {
				"schoolName": "Walker Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.9,4.9,4.6,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [332,333,341,336],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [343,334,345,338],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [328,333,341,336],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.111907, "longitude":	-82.574582	
			},
			"williams" : {
				"schoolName": "Williams Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.8,4.8,4.9,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [348,362,368,367],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [350,357,363,362],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [341,362,368,367],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.991962, "longitude":	-82.4065697	
			},
			"wilson" : {
				"schoolName": "Wilson Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.1,4.8,4.6,4.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [344,342,351,356],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [349,343,353,353],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [336,342,351,356],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9374629, "longitude": -82.4699729	
			},
			"young" : {
				"schoolName": "Young Magnet",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,4.9,4.7,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [312,304,305,305],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [331,320,323,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [308,304,305,305],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9802984, "longitude": -82.4381497	
			},
			"tampa_bay" : {
				"schoolName": "Tampa Bay Academy",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,2.6,3.0,3.1],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,234,236,234],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [243,244,259,230],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [230,234,236,234],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.07523, "longitude": -82.438999	
			},
			"terrace_community" : {
				"schoolName": "Terrace Community Charter School",
				"schoolScores": [
					{"subject": "writing",	"scores": [5.0,4.6,4.5,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [368,360,356,370],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [359,352,350,365],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [346,360,356,370],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude":28.0554975, "longitude":	-82.4044159	
			},
			"learning_gate" : {
				"schoolName": "Learning Gate Community School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,3.9,4.1,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [348,356,361,379],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [342,338,344,346],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [341,356,361,379],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.104188, "longitude":	-82.450142	
			},
			"tampa_charter" : {
				"schoolName": "Tampa Charter School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.1,3.9,4.1,4.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [299,293,310,322],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [319,312,321,324],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [304,293,310,322],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.9981502, "longitude": -82.54741		
			},
			"mount_pleasant" : {
				"schoolName": "Mount Pleasant Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.5,4.3,4.2,4.8],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [291,244,256,280],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [316,290,332,302],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [302,244,256,280],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.959057, "longitude":-82.477405	
			},
			"trinity" : {
				"schoolName": "Trinity Upper School",
				"schoolScores": [
					{"subject": "writing",	"scores": [4.6,4.8,4.5,4.6],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [317,321,319,337],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [328,330,333,339],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [312,321,319,337],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.989039, "longitude":	-82.483552	
			},
			"literacy_leadership" : {
				"schoolName": "Literacy Leadership Tech",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.9,4.8,4.6,4.7],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [300,318,322,343],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [312,329,324,342],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [303,318,322,343],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.89989, "longitude":	-82.37776	
			},
			"quest" : {
				"schoolName": "Quest Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [3.3,3.4,3.2,3.0],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [252,254,261,251],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [268,259,264,256],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [262,254,261,251],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 27.997072, "longitude":	-82.4152359	
			},
			"advantage" : {
				"schoolName": "Advantage Academy Middle School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,3.8,4.5],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,300,321],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,318,329],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,300,321],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0015006, "longitude": -82.1241955	
			},
			"shiloh" : {
				"schoolName": "Shiloh Middle Charter School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,null,4.2],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,null,317],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,null,317],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,null,317],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.038889, "longitude":	-82.133387	
			},
			"virtual" : {
				"schoolName": "Hillsborough Virtual Combination School",
				"schoolScores": [
					{"subject": "writing",	"scores": [null,null,4.1,3.9],	"image": "writing.png",	"rank": "21st of 42"},
					{"subject": "science",	"scores": [null,null,327,319],	"image": "science.png",	"rank": "21st of 42"},
					{"subject": "math",		"scores": [null,null,328,314],	"image": "math.png",	"rank": "21st of 42"},
					{"subject": "reading",	"scores": [null,null,327,319],	"image": "reading.png",	"rank": "21st of 42"}],	
				"schoolBadges": [],
				"latitude": 28.0601384, "longitude":-82.459126		
			}
		};