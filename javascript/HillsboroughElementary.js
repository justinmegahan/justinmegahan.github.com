var URL = "elementary"

var stateObject = 	{	"stateAverages" : [
						{"subject": "writing",	"scores": [4.2,4.3,4.1,4.2], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "science",	"scores": [305,305,310,315], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "Mean result score of 10th grade students on the science section of the FCAT. Scores range from 100-500."},
						{"subject": "math",		"scores": [324,322,324,325], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "math description"},
						{"subject": "reading",	"scores": [310,305,310,315], "dataTitle": "Florida Comprehensive Assessment Test", "dataContent": "reading description"}
					]};

var schoolObject = {

"forest_hills" : { 
	"schoolName": "Forest Hills Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.9,3.7,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [282,296,291,272],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [311,312,318,299],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [279,282,288,267],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0419624	, "longitude":	-82.4648168	}
,
"sheeny" : { 
	"schoolName": "Sheehy Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.1,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [271,279,287,266],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [310,319,315,310],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [273,278,289,275],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.005725	, "longitude":	-82.415228	}
,
"corr" : { 
	"schoolName": "Corr Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.2,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [288,315,309,310],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,344,336,325],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [288,304,297,291],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.795182	, "longitude":	-82.370504	}
,
"davis" : { 
	"schoolName": "Davis Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,3.8,3.7,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [293,295,293,288],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [324,323,321,313],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [295,294,294,286],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.016652	, "longitude":	-82.717522	}
,
"fishhawk_creek" : { 
	"schoolName": "Fishhawk Creek Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.4,4.4,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [345,350,359,358],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [362,365,374,365],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [336,341,357,347],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.841986	, "longitude":	-82.219328	}
,
"macfarlane_park" : { 
	"schoolName": "MacFarland Park Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.5,4.4,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [349,356,369,379],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [366,367,372,371],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [350,352,358,347],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9580766	, "longitude":	-82.492873	}
,
"collins" : { 
	"schoolName": "Collins Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.0,3.9,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [319,317,322,323],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [339,338,345,338],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [317,313,323,316],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8111519	, "longitude":	-82.3181427	}
,
"turner" : { 
	"schoolName": "Turner Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.4,4.3,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [331,334,346,341],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [357,357,355,350],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [322,330,340,329],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.167191	, "longitude":	-82.347792	}
,
"frost" : { 
	"schoolName": "Frost Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.9,4.0,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [278,281,288,288],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [320,310,306,309],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [288,286,276,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.91107	, "longitude":	-82.358575	}
,
"doby" : { 
	"schoolName": "Doby Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.9,3.8,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [314,315,310,321],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [328,330,331,332],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [305,304,304,304],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.780963	, "longitude":	-82.369565	}
,
"alexander" : { 
	"schoolName": "Alexander Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.1,3.8,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [292,289,304,321],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [337,331,329,332],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [294,290,295,296],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9983529	, "longitude":	-82.5142622	}
,
"summerfield_crossing" : { 
	"schoolName": "Summerfield Crossings Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.1,3.9,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [304,314,307,314],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [335,331,327,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [302,311,297,307],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.800246	, "longitude":	-82.322954	}
,
"stowers	" : { 
"schoolName": "Sotwers Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,3.8,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,null,326,330],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,null,340,344],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,null,323,322],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8496632	, "longitude":	-82.2586727	}
,
"bailey	" : { 
"schoolName": "Bailey Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,3.8,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,null,302,305],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,null,327,318],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,null,301,296],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0204362	, "longitude":	-82.2371936	}
,
"deer_park" : { 
	"schoolName": "Deer Park Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.4,4.2,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [333,329,342,347],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [362,358,367,365],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [332,332,337,337],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.078127	, "longitude":	-82.572159	}
,
"hammond" : { 
	"schoolName": "Hammond Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.4,4.1,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [356,354,356,358],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [366,363,367,368],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [340,346,354,341],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.1142458	, "longitude":	-82.5715185	}
,
"reddick" : { 
	"schoolName": "Reddick Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [null,4.2,3.5,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,275,297,282],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,307,328,317],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,266,286,271],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.7137038	, "longitude":	-82.3189908	}
,
"mosi" : { 
	"schoolName": "Mosi Partnership Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.9,3.6,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [275,268,266,293],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [311,299,294,302],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [281,267,267,286],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0543056	, "longitude":	-82.4047972	}
,
"kimbell" : { 
	"schoolName": "Kimbell Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [null,3.8,3.9,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,301,285,294],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,306,306,321],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,287,272,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.026205	, "longitude":	-82.410427	}
,
"anderson" : { 
	"schoolName": "Anderson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.8,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [339,328,335,333],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [353,356,353,349],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [319,315,333,318],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.899007	, "longitude":	-82.509352	}
,
"patel" : { 
	"schoolName": "USF Patel		",
	"schoolScores": [
		{"subject": "writing","scores": [null,4.2,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,333,307,310],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,355,326,340],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,322,298,310],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0565589	, "longitude":	-82.4049863	}
// ,
// "metropolitan_ministries" : { 
// 	"schoolName": "Metropolitan Misitries Patnership		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [null,null,3.2,3.8],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [null,null,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [null,null,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [,,,],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	27.9632893	, "longitude":	-82.4595313	}
,
"apollo_beach" : { 
	"schoolName": "Apollo Beach Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.1,4.0,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [312,321,321,337],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,334,343,351],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [307,314,314,318],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.7756138	, "longitude":	-82.4014246	}
,
"ballast_point" : { 
	"schoolName": "Ballast Point Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.3,4.0,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [313,334,343,348],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [345,346,345,355],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [319,326,316,328],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8893906	, "longitude":	-82.4879003	}
,
"bay_crest" : { 
	"schoolName": "Bay Crest Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.1,3.8,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [319,311,310,309],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [346,344,339,336],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [309,308,312,301],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9925196	, "longitude":	-82.5739859	}
,
"bing" : { 
	"schoolName": "Bing Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.8,3.7,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [294,304,298,308],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [314,324,332,325],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [284,297,289,290],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.914905	, "longitude":	-82.382197	}
,
"alafia" : { 
	"schoolName": "Alafia Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.2,4.2,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [337,342,339,339],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [354,365,355,349],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [327,339,336,330],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.88798	, "longitude":	-82.249565	}
,
"just" : { 
	"schoolName": "Just Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.5,3.3,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [273,270,270,276],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [299,294,287,295],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [253,266,258,267],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9600211	, "longitude":	-82.4737059	}
,
"boyette_springs" : { 
	"schoolName": "Boyette Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.7,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [311,319,317,323],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [337,338,340,341],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [310,313,311,313],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8479058	, "longitude":	-82.2798159	}
,
"bevis" : { 
	"schoolName": "Bevis Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.5,4.3,5.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [376,380,387,379],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [388,391,391,379],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [359,366,371,361],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.84935	, "longitude":	-82.231504	}
,
"brooker" : { 
	"schoolName": "Brooker Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.0,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [335,331,325,337],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [352,347,342,347],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [320,314,314,326],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9586324	, "longitude":	-82.4498166	}
,
"broward" : { 
	"schoolName": "Broward Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,3.9,3.8,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [282,274,293,280],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [303,287,312,300],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [279,271,276,275],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9883535	, "longitude":	-82.4642613	}
,
"bryan" : { 
	"schoolName": "Bryan Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,4.1,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [294,279,309,289],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [332,309,329,317],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [290,278,301,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0719673	, "longitude":	-82.6317627	}
,
"bryant" : { 
	"schoolName": "Bryant Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.3,4.4,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [341,347,344,356],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [368,367,369,373],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [335,341,338,347],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.072465	, "longitude":	-82.636159	}
,
"buckhorn" : { 
	"schoolName": "Buckhorn Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.2,3.9,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [333,347,335,328],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [353,360,354,344],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [328,345,330,324],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9122465	, "longitude":	-82.2437017	}
,
"burney" : { 
	"schoolName": "Burney Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.7,4.0,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [275,281,276,302],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [306,310,320,312],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [266,287,271,282],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0069663	, "longitude":	-82.123698	}
,
"cahoon" : { 
	"schoolName": "Cahoon Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.0,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [313,305,308,335],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [336,334,328,343],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [304,304,306,315],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0289482	, "longitude":	-82.43397	}
,
"cannella" : { 
	"schoolName": "Cannella Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.3,4.3,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [309,304,305,317],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [341,333,333,330],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [312,308,301,307],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.045593	, "longitude":	-82.532838	}
,
"carrollwood" : { 
	"schoolName": "Carrollwood Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.2,4.0,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [324,319,333,332],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [346,347,351,343],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [321,323,323,324],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0522395	, "longitude":	-82.4992618	}
,
"chiaramonte" : { 
	"schoolName": "Chiaramonte Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.1,3.9,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [306,309,332,335],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [330,326,345,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [291,280,299,305],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8830792	, "longitude":	-82.5031509	}
,
"chiles" : { 
	"schoolName": "Chiles Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.6,4.4,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [346,345,347,351],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [351,356,364,362],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [328,339,349,334],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.113841	, "longitude":	-82.392163	}
,
"citrus_park" : { 
	"schoolName": "Citus Park Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.2,4.0,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [315,310,321,330],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [342,328,338,340],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [313,307,312,322],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.078127	, "longitude":	-82.572159	}
,
"cimino" : { 
	"schoolName": "Cimino Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.2,4.0,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [337,329,338,342],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [359,352,357,356],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [331,330,336,328],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.873692	, "longitude":	-82.241245	}
,
"clair_mel" : { 
	"schoolName": "Clair Mel Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.3,3.8,3.7,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [278,280,288,288],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [301,317,313,306],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [277,285,281,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.938356	, "longitude":	-82.3692595	}
,
"clark" : { 
	"schoolName": "Clark Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.5,4.8,4.7,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [351,328,344,349],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [372,356,362,359],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [349,331,339,337],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.151986	, "longitude":	-82.364475	}
,
"claywell" : { 
	"schoolName": "Claywell Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.2,3.7,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [335,350,341,329],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [352,362,347,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [324,346,338,320],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0994869	, "longitude":	-82.5228703	}
,
"cleveland" : { 
	"schoolName": "Cleveland Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.0,4.1,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [263,302,302,283],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [299,308,305,321],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [266,280,271,278],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0139081	, "longitude":	-82.4525944	}
,
"colson" : { 
	"schoolName": "Colson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.0,3.7,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [304,302,316,312],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,332,341,326],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [298,306,320,308],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.982947	, "longitude":	-82.272626	}
,
"lockhart" : { 
	"schoolName": "Lockhart Magnet School		",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.0,4.0,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [293,293,307,300],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [313,314,326,317],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [291,270,280,273],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9781741	, "longitude":	-82.4385563	}
,
"cork" : { 
	"schoolName": "Cork Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.9,3.8,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [315,313,309,327],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [337,342,329,332],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [308,301,301,314],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0497413	, "longitude":	-82.1756429	}
,
"crestwood" : { 
	"schoolName": "Crestwood Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.7,3.8,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [296,293,295,304],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [326,321,311,309],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [285,291,288,296],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0189076	, "longitude":	-82.5181512	}
,
"cypress creek" : { 
	"schoolName": "Cypress Creek School		",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.2,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [277,298,300,279],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [312,322,325,318],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [273,293,294,285],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.2331732	, "longitude":	-82.7118596	}
,
"desoto" : { 
	"schoolName": "Desoto Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.0,4.1,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [296,289,303,299],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [319,325,335,326],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [277,290,299,279],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.948868	, "longitude":	-82.428675	}
,
"dickenson" : { 
	"schoolName": "Dickenson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.2,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [300,309,296,299],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,332,320,321],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [303,303,288,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9877976	, "longitude":	-82.5656523	}
,
"dover" : { 
	"schoolName": "Dover Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.0,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [281,290,288,295],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [321,316,317,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [287,284,279,285],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.987104	, "longitude":	-82.20939	}
,
"dunbar" : { 
	"schoolName": "Dunbar Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.3,4.0,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [329,316,302,327],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [355,342,333,349],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [322,315,298,307],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9572433	, "longitude":	-82.477317	}
,
"edison" : { 
	"schoolName": "Edison Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.8,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [273,277,276,278],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [306,299,312,310],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [261,259,266,275],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.988187	, "longitude":	-82.440384	}
,
"egypt_lake" : { 
	"schoolName": "Egypt Lake Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.5,4.6,4.1,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [289,301,290,286],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [333,342,323,313],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [297,295,287,290],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0077969	, "longitude":	-82.4981508	}
,
"essrig" : { 
	"schoolName": "Essrig Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.4,3.9,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [306,324,318,329],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [336,350,349,342],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [305,319,322,322],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.068492	, "longitude":	-82.540258	}
,
"folsom" : { 
	"schoolName": "Folsom Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.2,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [298,285,291,297],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [324,310,315,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [297,292,293,291],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.046914	, "longitude":	-82.3251779	}
,
"foster" : { 
	"schoolName": "Foster Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.0,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [265,273,289,270],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [294,297,307,290],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [276,283,280,260],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0075196	, "longitude":	-82.4356496	}
,
"gibsonton" : { 
	"schoolName": "Gibsonton Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.9,3.7,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [295,289,298,292],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [321,304,321,310],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [269,279,282,266],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8489145	, "longitude":	-82.3689817	}
,
"gorrie" : { 
	"schoolName": "Gorrie Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.4,4.5,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [361,358,352,367],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [373,362,364,373],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [350,345,351,354],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.939442	, "longitude":	-82.467907	}
,
"grady" : { 
	"schoolName": "Grady Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.3,4.3,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [307,292,334,340],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [327,324,351,349],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [294,288,330,323],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.932988	, "longitude":	-82.509394	}
,
"graham" : { 
	"schoolName": "Graham Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.2,3.6,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [254,269,277,279],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [273,290,302,317],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [257,273,265,284],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9700208	, "longitude":	-82.4653725	}
,
"bellamy" : { 
	"schoolName": "Bellamy Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.0,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [301,300,305,314],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [326,326,323,324],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [302,306,302,302],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0355736	, "longitude":	-82.5675969	}
,
"heritage" : { 
	"schoolName": "Heritage Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.3,4.0,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [300,312,316,304],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [328,337,343,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [303,302,310,293],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.147121	, "longitude":	-82.286055	}
,
"hunters_green" : { 
	"schoolName": "Hunters Green Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.2,4.1,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [352,338,334,335],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [360,356,354,350],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [337,334,330,329],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.140662	, "longitude":	-82.329936	}
,
"ippolito" : { 
	"schoolName": "Ippolito Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.7,3.8,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [278,292,302,282],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [304,314,321,302],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [277,286,284,274],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.876695	, "longitude":	-82.355965	}
,
"jackson" : { 
	"schoolName": "Jackson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.9,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [285,288,298,295],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [314,313,333,307],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [276,287,295,291],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0205687	, "longitude":	-82.1197396	}
,
"kenly" : { 
	"schoolName": "Kenly Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.7,3.5,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [283,283,286,285],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [316,307,316,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [280,278,282,276],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9691882	, "longitude":	-82.3809265	}
,
"kingswood" : { 
	"schoolName": "Kingswood Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.1,3.8,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [294,314,307,323],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,340,323,334],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [293,303,291,302],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.89808	, "longitude":	-82.2950915	}
,
"knights" : { 
	"schoolName": "Knights Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.1,3.8,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [299,311,302,312],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [323,332,323,324],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [291,303,287,294],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0759114	, "longitude":	-82.1548757	}
,
"lakemagdalene" : { 
	"schoolName": "Lake Magdalene Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.9,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [317,321,319,327],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [341,341,336,333],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [311,319,315,322],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.057795	, "longitude":	-82.4784282	}
,
"lanier" : { 
	"schoolName": "Lanier Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.1,3.8,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [310,297,308,303],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [342,321,322,332],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [304,298,305,285],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8778988	, "longitude":	-82.5234056	}
,
"lee" : { 
	"schoolName": "Lee Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.0,3.7,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [325,329,325,299],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [346,360,346,323],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [318,324,313,297],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9664099	, "longitude":	-82.4575945	}
,
"limona" : { 
	"schoolName": "Limona Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.1,4.1,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [338,334,326,324],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [357,357,352,348],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [332,328,316,313],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9572447	, "longitude":	-82.300925	}
,
"lincoln" : { 
	"schoolName": "Lincoln Magnet School		",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,4.1,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [301,328,326,329],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [330,347,347,340],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [311,329,320,321],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.012975	, "longitude":	-82.112128	}
,
"lewis" : { 
	"schoolName": "Lewis Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.0,4.0,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [307,326,317,334],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [341,337,341,343],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [310,322,313,327],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0470801	, "longitude":	-82.3730775	}
,
"lithia_springs" : { 
	"schoolName": "Lithia Springs Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.3,4.1,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [339,349,344,347],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [369,374,374,369],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [339,343,338,335],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.878456	, "longitude":	-82.223821	}
,
"lomax" : { 
	"schoolName": "Lomax Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.2,3.8,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [314,315,321,313],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,338,340,340],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [312,318,319,309],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.983354	, "longitude":	-82.4303719	}
,
"lopez" : { 
	"schoolName": "Lopez Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.7,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [309,299,298,307],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [333,329,320,324],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [291,293,286,302],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9661335	, "longitude":	-82.2762024	}
,
"lowry" : { 
	"schoolName": "Lowry Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.2,4.1,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [331,326,340,339],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [348,356,348,344],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [320,318,327,331],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.038286	, "longitude":	-82.612796	}
,
"lutz" : { 
	"schoolName": "Lutz Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.3,4.2,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [329,338,344,345],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [349,348,360,356],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [313,326,330,328],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.1472356	, "longitude":	-82.4595384	}
,
"mabry" : { 
	"schoolName": "Mabry Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.4,4.3,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [344,349,354,356],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [375,372,370,374],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [344,345,350,348],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9294664	, "longitude":	-82.5142622	}
,
"mango" : { 
	"schoolName": "Mango Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.8,3.7,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [284,292,301,294],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [323,317,325,314],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [285,287,290,292],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0072542	, "longitude":	-82.3025705	}
,
"maniscalco" : { 
	"schoolName": "Maniscalco Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.0,4.1,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [336,337,333,330],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [359,349,342,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [327,321,319,317],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.1276647	, "longitude":	-82.4502574	}
,
"mcdonald" : { 
	"schoolName": "McDonald Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.3,3.7,3.6,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [284,293,293,291],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [302,297,313,319],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [277,283,271,286],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0216237	, "longitude":	-82.2851253	}
,
"mendenhall" : { 
	"schoolName": "Mendenhall Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.1,3.9,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [288,295,309,301],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [316,314,327,319],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [295,308,314,298],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9930754	, "longitude":	-82.4798171	}
,
"miles" : { 
	"schoolName": "Miles Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.5,3.3,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [286,277,279,279],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [304,304,307,291],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [271,272,269,262],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0594617	, "longitude":	-82.4562054	}
,
"mintz" : { 
	"schoolName": "Mintz Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.2,3.8,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [298,318,306,313],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [326,343,332,326],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [297,311,301,306],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.915096	, "longitude":	-82.3071889	}
,
"mitchell" : { 
	"schoolName": "Mithcell Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.5,4.3,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [345,345,341,359],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [349,346,352,359],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [336,332,335,352],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9427993	, "longitude":	-82.4909284	}
,
"mckirtick" : { 
	"schoolName": "McKitrick Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.4,4.3,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [349,357,352,354],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [374,379,373,367],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [338,352,348,348],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.158064	, "longitude":	-82.530714	}
,
"morgan_woods" : { 
	"schoolName": "Morgan Woods Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.8,3.7,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [294,300,287,304],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [332,330,313,329],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [298,302,287,295],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0133522	, "longitude":	-82.5595411	}
,
"mort" : { 
	"schoolName": "Mort Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.2,3.9,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [283,288,278,300],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [300,307,315,311],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [270,264,275,292],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.082428	, "longitude":	-82.440019	}
,
"nelson" : { 
	"schoolName": "Nelson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.7,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [324,322,323,329],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [345,349,354,351],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [317,311,313,318],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9083256	, "longitude":	-82.2054936	}
,
"northwest" : { 
	"schoolName": "Northwest Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.3,3.9,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [324,337,333,331],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [355,362,355,351],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [320,332,334,323],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.105199	, "longitude":	-82.548224	}
,
"oak_grove" : { 
	"schoolName": "Oak Grove Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.0,3.6,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [287,296,300,299],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [324,322,319,324],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [290,297,299,296],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0047416	, "longitude":	-82.4828728	}
,
"muller" : { 
	"schoolName": "Muller Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,4.0,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [332,337,339,309],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [340,349,350,338],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [321,325,319,298],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0699926	, "longitude":	-82.4345271	}
,
"oak_park" : { 
	"schoolName": "Oak Park Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.8,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [264,266,283,270],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [295,300,312,309],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [257,257,278,265],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.967776	, "longitude":	-82.406966	}
,
"palm_river" : { 
	"schoolName": "Palm River Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.6,3.5,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [281,279,300,296],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [300,311,313,313],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [271,282,296,291],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9414113	, "longitude":	-82.3859265	}
,
"pinecrest" : { 
	"schoolName": "Pinecrest Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,3.7,3.7,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [310,302,319,329],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [320,310,330,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [300,298,309,312],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.848437	, "longitude":	-82.147584	}
,
"pizzo" : { 
	"schoolName": "Pizzo Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.0,4.1,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [287,296,296,306],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [317,320,320,323],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [278,294,281,292],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0554975	, "longitude":	-82.4044159	}
,
"pride" : { 
	"schoolName": "Pride Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.4,4.2,4.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [333,340,344,354],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [355,356,360,360],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [330,333,343,343],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.1567884	, "longitude":	-82.3190856	}
,
"potter" : { 
	"schoolName": "Potter Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.3,4.0,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [255,266,278,270],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [291,296,308,292],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [267,267,262,264],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9872427	, "longitude":	-82.4239829	}
,
"riverhills" : { 
	"schoolName": "Riverhills Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.7,3.4,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [290,278,288,274],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [320,297,314,289],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [287,280,283,274],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.020721	, "longitude":	-82.38608	}
,
"riverview" : { 
	"schoolName": "Riverview Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.8,3.8,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [311,314,325,325],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [348,338,353,348],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [304,311,318,320],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8739928	, "longitude":	-82.3248725	}
,
"robinson" : { 
	"schoolName": "Robinson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.0,3.8,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [297,302,307,292],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [320,314,328,306],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [292,296,303,287],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9474562	, "longitude":	-82.1704428	}
,
"robles" : { 
	"schoolName": "Robles Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,3.9,3.9,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [259,285,266,285],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [294,307,289,303],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [267,272,255,273],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0100197	, "longitude":	-82.4089824	}
,
"roland_park" : { 
	"schoolName": "Roland Park School of Choice		",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,4.2,3.7,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [256,258,272,285],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [293,282,289,302],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [264,265,274,269],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9566877	, "longitude":	-82.5187068	}
,
"rossevelt" : { 
	"schoolName": "Roosevelt Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.5,4.7,4.6,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [355,364,367,376],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [370,371,377,379],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [341,354,356,361],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9164113	, "longitude":	-82.4978731	}
,
"ruskin" : { 
	"schoolName": "Ruskin Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.4,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [287,299,283,288],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [328,323,318,319],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [277,300,283,285],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.7122525	, "longitude":	-82.4317606	}
,
"schmidt" : { 
	"schoolName": "Schmidt Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.1,4.0,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [305,314,315,309],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [334,337,328,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [300,308,310,299],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9581389	, "longitude":	-82.3186635	}
,
"schwarzkopf" : { 
	"schoolName": "Schwarzkopf Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.2,4.0,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [342,332,331,342],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [368,352,354,344],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [334,328,322,329],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.1345617	, "longitude":	-82.5103284	}
,
"seffner" : { 
	"schoolName": "Seffner Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.0,4.0,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [313,315,325,319],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [345,343,347,339],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [309,312,316,313],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9661335	, "longitude":	-82.2762024	}
,
"seminole" : { 
	"schoolName": "Seminole Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.2,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [294,304,306,332],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [337,334,331,345],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [296,310,304,312],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0035808	, "longitude":	-82.455107	}
,
"sessums" : { 
	"schoolName": "Sussums Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.3,4.2,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [314,316,318,327],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [343,347,348,345],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [308,312,312,314],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8333598	, "longitude":	-82.3189808	}
,
"shaw" : { 
	"schoolName": "Shaw Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.7,3.7,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [260,278,277,295],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [293,314,305,306],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [263,268,270,279],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0516843	, "longitude":	-82.4414829	}
,
"shore" : { 
	"schoolName": "Shore Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.2,4.0,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [296,314,323,315],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [326,334,344,331],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [305,311,316,318],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8628021	, "longitude":	-82.5267625	}
,
"springhead" : { 
	"schoolName": "Springhead Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.7,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [292,292,299,311],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [329,323,326,318],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [287,295,293,294],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9733567	, "longitude":	-82.0711967	}
,
"sulphur_springs" : { 
	"schoolName": "Sulphur Springs Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.1,3.9,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [244,280,271,270],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [270,304,302,292],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [245,268,262,263],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0266854	, "longitude":	-82.4464831	}
,
"summerfield" : { 
	"schoolName": "Summerfield Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.2,3.9,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [297,301,312,306],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [328,322,327,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [301,299,301,295],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8025276	, "longitude":	-82.2887023	}
,
"symmes" : { 
	"schoolName": "Symmes Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.1,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [320,326,314,322],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [345,351,338,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [311,321,310,324],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.888705	, "longitude":	-82.308882	}
,
"tampa_bay_boulevard" : { 
	"schoolName": "Tampa Bay Boulevard Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,3.8,3.7,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [286,273,275,308],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [321,298,304,319],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [271,277,283,290],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9749694	, "longitude":	-82.4943812	}
,
"rampello" : { 
	"schoolName": "Rampello Downtown		",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.2,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [308,321,327,339],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,338,346,358],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [302,310,312,325],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9478209	, "longitude":	-82.4529433	}
,
"tampa_palms" : { 
	"schoolName": "Tampa Palms Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.3,4.3,4.3,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [348,357,345,363],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [363,366,362,371],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [339,344,343,354],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.09797	, "longitude":	-82.385362	}
,
"temple_terrace" : { 
	"schoolName": "Temple Terrace Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.9,3.8,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [323,320,319,306],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,344,341,325],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [315,313,313,297],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0336298	, "longitude":	-82.3914819	}
,
"thonotosassa" : { 
	"schoolName": "Thonotosassa Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.6,3.8,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [289,288,314,281],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [316,315,322,301],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [288,280,295,291],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.053208	, "longitude":	-82.311929	}
,
"tinker" : { 
	"schoolName": "Tinker Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,4.1,3.9,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [324,336,330,333],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,347,347,349],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [325,327,326,320],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8466917	, "longitude":	-82.4789838	}
,
"town_and_country" : { 
	"schoolName": "Town and Country Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.2,3.9,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [290,287,308,308],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [314,310,337,319],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [285,286,293,295],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0011304	, "longitude":	-82.5617633	}
,
"trapnell" : { 
	"schoolName": "Trapnell Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.7,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [276,289,290,298],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [324,307,320,310],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [279,290,284,281],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9666898	, "longitude":	-82.1386987	}
,
"twin_lakes" : { 
	"schoolName": "Twin Lakes Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.9,3.6,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [301,296,290,295],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [320,319,319,326],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [298,294,286,288],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0283518	, "longitude":	-82.487595	}
,
"valrico" : { 
	"schoolName": "Valrico Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.0,3.9,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [314,300,318,317],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [341,329,334,335],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [316,302,314,311],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.92971	, "longitude":	-82.242469	}
,
"walden_lake" : { 
	"schoolName": "Walden Lake Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.4,4.1,4.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [318,327,327,321],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [346,348,347,339],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [331,328,329,321],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.977697	, "longitude":	-82.1690799	}
,
"bt_washington" : { 
	"schoolName": "BT Washington		",
	"schoolScores": [
		{"subject": "writing","scores": [3.4,3.6,3.6,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [263,253,263,270],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [292,283,296,300],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [257,250,252,257],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9586324	, "longitude":	-82.4498166	}
,
"westchase" : { 
	"schoolName": "Westchase Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.2,4.3,4.2,4.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [361,368,359,372],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [378,378,375,378],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [345,353,348,351],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.044975	, "longitude":	-82.592514	}
,
"west_shore" : { 
	"schoolName": "West Shore Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.9,4.1,3.8,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [274,292,289,316],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [299,303,311,337],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [275,286,283,297],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8628021	, "longitude":	-82.5267625	}
,
"west_tampa" : { 
	"schoolName": "West Tampa Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.8,3.7,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [269,276,283,317],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [315,307,315,321],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [278,276,278,284],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.960858	, "longitude":	-82.488056	}
,
"james" : { 
	"schoolName": "James		",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.8,3.6,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [302,278,288,272],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [289,288,301,307],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [263,262,267,272],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9914854	, "longitude":	-82.4100139	}
,
"wilson" : { 
	"schoolName": "Wilson Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.9,3.7,4.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [286,305,325,322],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [311,315,355,343],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [291,304,329,308],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0280762	, "longitude":	-82.1289755	}
,
"wimauma" : { 
	"schoolName": "Wimauma Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [4.0,4.0,3.9,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [304,311,310,318],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [335,348,341,342],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [281,300,296,292],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8739928	, "longitude":	-82.3248725	}
,
"witter" : { 
	"schoolName": "Witter Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,4.1,3.9,4.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [263,292,300,279],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [296,316,317,305],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [263,281,289,273],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0464068	, "longitude":	-82.4339828	}
,
"woodbridge" : { 
	"schoolName": "Woodbridge Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.8,3.5,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [309,297,308,297],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [328,326,331,316],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [300,294,300,295],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.015055	, "longitude":	-82.575902	}
,
"yates" : { 
	"schoolName": "Yates Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,4.1,3.7,4.2],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [310,303,311,300],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [338,325,328,322],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [303,304,303,299],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9419677	, "longitude":	-82.2762024	}
,
"richardson" : { 
	"schoolName": "Richardson Academy		",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,3.8,null],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,null,null,300],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,null,null,341],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,null,null,328],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0103823	, "longitude":	-82.4759241	}
// ,
// "metro_ministries" : { 
// 	"schoolName": "Metropolitan Ministries		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [2.8,null,null,null],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [252,null,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [null,null,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [,,,],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	27.9632893	, "longitude":	-82.4595313	}
,
"village_excellence" : { 
	"schoolName": "Village of Excellence Academy		",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,4.1,4.1,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [280,282,290,322],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [291,328,null,345],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [262,274,292,317],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.030473	, "longitude":	-82.410358	}
// ,
// "rebirth" : { 
// 	"schoolName": "Rebirth Academy		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [3.0,null,null,null],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [266,null,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [315,null,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [293,null,null,null],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	27.9980202	, "longitude":	-82.4369111	}
,
"trinity" : { 
	"schoolName": "Trinity School for Children		",
	"schoolScores": [
		{"subject": "writing","scores": [3.6,3.8,4.2,4.0],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [306,320,320,316],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [324,319,322,336],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [313,325,318,323],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.987765	, "longitude":	-82.483383	}
,
"learning_gate" : { 
	"schoolName": "Learning Gate		",
	"schoolScores": [
		{"subject": "writing","scores": [3.3,3.9,3.5,3.7],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [337,316,341,331],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,343,349,321],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [326,316,324,325],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.040442	, "longitude":	-82.471456	}
,
"redlands" : { 
	"schoolName": "Redlands Christian		",
	"schoolScores": [
		{"subject": "writing","scores": [2.9,3.5,3.6,3.8],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [311,313,304,285],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [311,333,340,318],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [286,313,289,270],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.7162639	, "longitude":	-82.4336662	}
// ,
// "anderson" : { 
// 	"schoolName": "Anderson Academy		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [2.9,null,null,null],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [null,256,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [null,283,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [null,260,null,null],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	27.9469663	, "longitude":	-82.4209269	}
,
"tamap_charter" : { 
	"schoolName": "Tampa Charter School		",
	"schoolScores": [
		{"subject": "writing","scores": [3.5,3.7,null,3.6],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [287,302,288,null],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [306,313,307,null],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [287,295,290,null],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9981502	, "longitude":	-82.54741	}
,
"walton" : { 
	"schoolName": "Walton Academy		",
	"schoolScores": [
		{"subject": "writing","scores": [3.8,3.8,3.3,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [267,306,295,291],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [311,329,318,320],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [279,307,283,287],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.989661	, "longitude":	-82.459119	}
,
"kids_community" : { 
	"schoolName": "Kids Community College		",
	"schoolScores": [
		{"subject": "writing","scores": [3.3,3.6,3.7,4.3],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,292,326,322],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,323,344,329],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,295,311,321],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.8805994	, "longitude":	-82.3293352	}
// ,
// "patel_intermediate" : { 
// 	"schoolName": "USF Patel Intermediate		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [3.0,null,null,null],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [281,null,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [299,null,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [284,null,null,null],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	28.0565589	, "longitude":	-82.4049863	}
,
"hope" : { 
	"schoolName": "Hope Preparatory		",
	"schoolScores": [
		{"subject": "writing","scores": [null,2.7,3.0,2.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [243,245,258,262],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [243,300,260,264],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [233,240,248,229],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.997072	, "longitude":	-82.4152359	}
,
"shiloh" : { 
	"schoolName": "Shiloh Charter		",
	"schoolScores": [
		{"subject": "writing","scores": [3.7,3.6,3.8,4.4],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [297,296,312,319],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [344,306,334,325],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [319,293,296,303],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.038889	, "longitude":	-82.133387	}
,
"community" : { 
	"schoolName": "Community Charter		",
	"schoolScores": [
		{"subject": "writing","scores": [null,3.7,3.6,3.5],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,274,276,301],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,307,319,343],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,257,282,292],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.049923	, "longitude":	-82.45585	}
,
"advantage" : { 
	"schoolName": "Advantage Academy of Hillsborough		",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,3.5,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,null,297,278],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,null,323,327],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,null,308,276],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	28.0015006	, "longitude":	-82.1241955	}
,
"valrico_lake" : { 
	"schoolName": "Valrico Lake Advantage Academy		",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,4.2,4.1],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,null,294,340],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,null,319,326],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,null,317,335],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.9469663	, "longitude":	-82.4209269	}
// ,
// "at_jones" : { 
// 	"schoolName": "AT Jones Math Science and Technology		",
// 	"schoolScores": [
// 		{"subject": "writing","scores": [null,null,null,3.8],"image": "writing.png","rank": "21st of 42"},
// 		{"subject": "science","scores": [null,null,null,null],"image": "science.png","rank": "21st of 42"},
// 		{"subject": "math","scores": [null,null,null,null],"image": "math.png", "rank": "21st of 42"},
// 		{"subject": "reading", "scores": [,,,],"image": "reading.png", "rank": "21st of 42"}],
// 	"schoolBadges": [],
// 	"latitude":	28.0847645	, "longitude":	-82.5301798	}
,
"hillsborough_virtual" : { 
	"schoolName": "Hillsborough Virtual Comination School Elementary School",
	"schoolScores": [
		{"subject": "writing","scores": [null,null,3.4,3.9],"image": "writing.png","rank": "21st of 42"},
		{"subject": "science","scores": [null,329,332,319],"image": "science.png","rank": "21st of 42"},
		{"subject": "math","scores": [null,335,334,316],"image": "math.png", "rank": "21st of 42"},
		{"subject": "reading", "scores": [null,331,337,328],"image": "reading.png", "rank": "21st of 42"}],
	"schoolBadges": [],
	"latitude":	27.962663	, "longitude":	-82.445707	}
};
