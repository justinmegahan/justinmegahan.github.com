function getGetOrdinal(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
}

function initialize() {
	var myOptions = {
		zoom: 12,
		center: new google.maps.LatLng(Clay.latitude, Clay.longitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	setMarkers(map, schools);

	findClosestSchools();
}


/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */

var schools = [[]];

for (i in schoolObject) {
  var obj = [schoolObject[i].schoolName, schoolObject[i].latitude, schoolObject[i].longitude, 0];
  schools.push(obj);
};


function setMarkers(map, locations) {

	// Add markers to the map

	// Marker sizes are expressed as a Size of X,Y
	// where the origin of the image (0,0) is located
	// in the top left of the image.

	// Origins, anchor positions and coordinates of the marker
	// increase in the X direction to the right and in
	// the Y direction down.

	var image = new google.maps.MarkerImage('../images/schoollogo.png',
		// This marker is 25 pixels wide by 25 pixels tall.
		new google.maps.Size(25, 25),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 0,25.
		new google.maps.Point(0, 25));
	var shadow = new google.maps.MarkerImage('../images/shadow.png',
		// The shadow image is larger in the horizontal dimension
		// while the position and offset are the same as for the main image.
		new google.maps.Size(30, 25),
		new google.maps.Point(0,0),
		new google.maps.Point(0, 25));
		// Shapes define the clickable region of the icon.
		// The type defines an HTML &lt;area&gt; element 'poly' which
		// traces out a polygon as a series of X,Y points. The final
		// coordinate closes the poly by connecting to the first
		// coordinate.
	var shape = {
		coord: [1, 1, 1, 25, 25, 25, 25 , 1],
		type: 'poly'
	};

	for (var i = 0; i < locations.length; i++) {
		var school = locations[i];
		var myLatLng = new google.maps.LatLng(school[1], school[2]);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			shadow: shadow,
			icon: image,
			shape: shape,
			title: school[0],
			zIndex: school[3]
		});
	}
}

		
function rad(x) {return x*Math.PI/180;}
		
function findClosestSchools() {
	var lat = Clay.latitude;
	var lng = Clay.longitude;
	var R = 6371;
	var distances = [];
	var closest = -1;
	var j = 0

	for ( i in schoolObject ) {
		var mlat = schoolObject[i].latitude;
		var mlng = schoolObject[i].longitude;
		var dLat  = rad(mlat - lat);
		var dLong = rad(mlng - lng);
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = (R * c)/1.609344;
		distances[j] = [d, schoolObject[i].schoolName,i];
		j++;
	}
		
	distances.sort(function(a, b) { 
		return a[0] > b[0]?1:-1;
	});

	// create Nearby Schools HTML and insert it
	var nearbySchoolsHTML = '<h3>Choice to this school</h3><a href="http://www.sdhc.k12.fl.us/choice/schoice.asp"><p>Visit the Hillsborough County School Choice website for more information and to fill out a choice application.</p></a><h3>Nearby Schools</h3><table><tr><td><a href="' + URL + '.html?school='+ distances[1][2] +'">'+ distances[1][1] +' </a></td><td> ' + distances[1][0].toFixed(1) + ' miles</td></tr><tr><td><a href="' + URL + '.html?school='+ distances[2][2] +'">'+ distances[2][1] +' </a></td><td> ' + distances[2][0].toFixed(1) + ' miles</td></tr><tr><td><a href="' + URL + '.html?school='+ distances[3][2] +'">'+ distances[3][1] +' </a></td><td> ' + distances[3][0].toFixed(1) + ' miles</td></tr><tr><td><a href="' + URL + '.html?school='+ distances[4][2] +'">'+ distances[4][1] +' </a></td><td> ' + distances[4][0].toFixed(1) + ' miles</td></tr><tr><td><a href="' + URL + '.html?school='+ distances[5][2] +'">'+ distances[5][1] +' </a></td><td> ' + distances[5][0].toFixed(1) + ' miles</td></tr></table>'
	document.getElementById('nearbySchools').innerHTML = nearbySchoolsHTML;
}



function insertText () {

// create Badge HTML - !!!CURRENTLY NOT IMPLEMENTED!!!
	var badgesHTML = '<h1><div class="triangle"></div>' + Clay.schoolName + '</h1>';		
	
	for(i in Clay.schoolBadges){
		if (Clay.schoolBadges[i] == "ap") {
			badgesHTML += '<a data-placement="below" href="#" rel="popover" data-content="High AP Test Scores" data-original-title="Title"><img class="badge" src="../images/apcolor.png" /></a>';
			} else if (Clay.schoolBadges[i] == "public") {
				badgesHTML += '<a data-placement="below" href="#" rel="popover" data-content="Public School" data-original-title="Title"><img class="badge" src="../images/public.png" /></a>';
			} else if (Clay.schoolBadges[i] == "private") {
				badgesHTML += '<a data-placement="below" href="#" rel="popover" data-content="Private School" data-original-title="Title"><img class="badge" src="../images/privates.png" /></a>';
			} else if (Clay.schoolBadges[i] == "graduation") {
				badgesHTML += '<a data-placement="below" href="#" rel="popover" data-content="High Graduation Rate" data-original-title="Title"><img class="badge" src="../images/graduationcolor.png" /></a>';
		}
	}
		
// insert Badge HTML
	document.getElementById('badges').innerHTML = badgesHTML;


// create Charts HTML
	var chartsHTML = "";
	
	for(i in Clay.schoolScores){
		if (Clay.schoolScores[i].scores[3] < stateObject.stateAverages[i].scores[3]) {
			schoolVsState = '<p class="belowState clear"> &darr;Below State Average</p>';
		} else if (Clay.schoolScores[i].scores[3] > stateObject.stateAverages[i].scores[3]){
			schoolVsState = '<p class="aboveState clear"> &uarr;Above State Average</p>';
		} else {
			schoolVsState = '<p class="atState clear"> At State Average</p>';
		}

		var schoolsInDistrict = 0;
		for ( property in schoolObject ){
   			if(schoolObject.hasOwnProperty(property)){
		      schoolsInDistrict++;
			}
		};
		
		k = 0;
		var schoolRanking = [];
		for ( x in schoolObject ) {
			schoolRanking[k] = [schoolObject[x].schoolScores[i].scores[3], schoolObject[x].schoolName,x];
			k++;
		}
		
		schoolRanking.sort(function(a, b) { 
			return b[0] > a[0]?1:-1;
		});
		
		var schoolRank = 1;
		for( y in schoolRanking) {
			if (schoolRanking[y][0] != Clay.schoolScores[i].scores[3]) {
				schoolRank++;}
			else break;
		}

		schoolRank = getGetOrdinal(schoolRank);
			
		chartsHTML += '<div class="chart"><div id="'+ Clay.schoolScores[i].subject +'" class="graph"></div><div class="stats floatleft"><div class="subject floatleft"><h3>'+ Clay.schoolScores[i].subject +'</h3><img src="../images/'+ Clay.schoolScores[i].image +'" /></div><div class="scores floatleft"><h4 data-placement="below" rel="popover" data-content="'+ stateObject.stateAverages[i].dataContent +'" data-original-title="'+ stateObject.stateAverages[i].dataTitle +'">'+ Clay.schoolScores[i].scores[3] +'</h4></div><div>'+ schoolVsState +'<p class="districtRank">'+ schoolRank +' of '+ schoolsInDistrict +' schools in district</p></div></div></div>'
	}

	//insert Charts HTML
	document.getElementById('charts').innerHTML = chartsHTML;

	//create canvas
	canvasApp();

	$("h4[rel=popover]").popover({ offset: 15 }).click(function(e){e.preventDefault()});
	$("a[rel=popover]").popover({ offset: 0 }).click(function(e){e.preventDefault()});
}


// Functions to find maximum and minimum values in arrays
Array.max = function( array ){
	return Math.max.apply( Math, array );
};

Array.min = function( array ){
	return Math.min.apply( Math, array );
};
		

function canvasApp() {
	for(i in Clay.schoolScores){
		drawScreen(Clay.schoolScores[i].subject,Clay.schoolScores[i].scores, stateObject.stateAverages[i].scores);
	}

	function drawScreen(subject, subjectPoints, stateAverages) {
		var stage = new Kinetic.Stage(subject, 400, 200);
				
		//setting context for chart based on individual scores
		var schoolMax = Math.max.apply(null, subjectPoints);
		var stateMax = Math.max.apply(null, stateAverages);
		var max;
	
		if (schoolMax > stateMax){max = schoolMax}
			else {max = stateMax}
				
		var schoolMin = Math.min.apply(null, subjectPoints);
		var stateMin = Math.min.apply(null, stateAverages);
		var min;
	
		if (schoolMin < stateMin) {min = schoolMin;}
			else {min = stateMin;}

		var scope = max - min;
		var yConstant = 150/scope;

		//converting scores to Y-locations 
		var subjectPoint = new Array();
		subjectPoint[0] = ((max - subjectPoints[0]) * yConstant) + 5;
		subjectPoint[1] = ((max - subjectPoints[1]) * yConstant) + 5;
		subjectPoint[2] = ((max - subjectPoints[2]) * yConstant) + 5;
		subjectPoint[3] = ((max - subjectPoints[3]) * yConstant) + 5;
				
		var stateAverage = new Array();
		stateAverage[0] = ((max - stateAverages[0]) * yConstant) + 5;
		stateAverage[1] = ((max - stateAverages[1]) * yConstant) + 5;
		stateAverage[2] = ((max - stateAverages[2]) * yConstant) + 5;
		stateAverage[3] = ((max - stateAverages[3]) * yConstant) + 5;
			
		var flatGraph = new Kinetic.Shape(function(){
			var canvas = this.getCanvas();
			var context = this.getContext();
				
			//chart grid lines
			context.strokeStyle = "black";
			context.lineWidth = .25;
			context.beginPath(); context.moveTo(25,25); context.lineTo(375, 25); context.stroke(); context.closePath();
			context.beginPath(); context.moveTo(25,75); context.lineTo(375, 75); context.stroke(); context.closePath();
			context.beginPath(); context.moveTo(25, 125); context.lineTo(375, 125); context.stroke(); context.closePath();
			context.lineWidth = 4; context.beginPath();	context.moveTo(25,165);	context.lineTo(375, 165); context.stroke();
			context.closePath();
			
			//y labels
			context.fillStyle = "#333333";
			context.font = "18px _sans";
			contextBaseline = "top";
			context.fillText ("2008", 30, 185);
			context.fillText ("2009", 130, 185);
			context.fillText ("2010", 230, 185);
			context.fillText ("2011", 330, 185);
				
			//state average
			context.strokeStyle = "#999999";
			context.lineWidth = 3;
			context.lineJoin = 'round';
			context.beginPath();
			context.moveTo( 50, stateAverage[0]);
			context.lineTo(150, stateAverage[1]);
			context.lineTo(250, stateAverage[2]);
			context.lineTo(350, stateAverage[3]);
			context.stroke();
			context.closePath();
			context.fillStyle = "#999";
			context.font = "12px _sans";
			contextBaseline = "top";
			context.fillText ("State", 10, stateAverage[0]);
			context.fillText ("Average", 5, stateAverage[0]+10);
			
			//school points
			context.strokeStyle = "#006600";
			context.lineWidth = 4;
			context.lineJoin = 'round';
			context.beginPath();
			context.moveTo( 50, subjectPoint[0]);
			context.lineTo(150, subjectPoint[1]);
			context.lineTo(250, subjectPoint[2]);
			context.lineTo(350, subjectPoint[3]);
			context.shadowOffsetX = 1;
			context.shadowOffsetY = 1;
			context.shadowBlur = 4;
			context.shadowColor = "#CCCCCC";
			context.stroke();
			context.closePath();
		});
				
		stage.add(flatGraph);
				
		var dot1 = new Kinetic.Shape(function(){
			var context = this.getContext();
			context.beginPath();
			context.arc(50, subjectPoint[0], 5, 0, Math.PI * 2, true);
			context.fillStyle = "#060"
			context.strokeStyle = "rgba(0,102,0,0)";
			context.fill();

			context.rect(20, subjectPoint[0]-20, 60, 60);
			context.fillStyle = "rgba(0,102,0,.0)";
			context.fill();
			context.lineWidth = 0;
			context.stroke();
		});

		var dot2 = new Kinetic.Shape(function(){
			var context = this.getContext();
			context.beginPath();
			context.arc(150, subjectPoint[1], 5, 0, Math.PI * 2, true);
			context.fillStyle = "#060"
			context.strokeStyle = "rgba(0,102,0,0)";
			context.fill();

			context.rect(120, subjectPoint[1]-20, 60, 60);
			context.fillStyle = "rgba(0,102,0,.0)";
			context.fill();
			context.lineWidth = 0;
			context.stroke();
		});

		var dot3 = new Kinetic.Shape(function(){
			var context = this.getContext();
			context.beginPath();
			context.arc(250, subjectPoint[2], 5, 0, Math.PI * 2, true);
			context.fillStyle = "#060"
			context.strokeStyle = "rgba(0,102,0,0)";
			context.fill();
							
			context.rect(220, subjectPoint[2]-20, 60, 60);
			context.fillStyle = "rgba(0,102,0,.0)";
			context.fill();
			context.lineWidth = 0;
			context.stroke();
		});

		var dot4 = new Kinetic.Shape(function(){
			var context = this.getContext();
			context.beginPath();
			context.arc(350, subjectPoint[3], 5, 0, Math.PI * 2, true);
			context.fillStyle = "#060"
			context.strokeStyle = "rgba(0,102,0,0)";
			context.fill();
						
			context.rect(320, subjectPoint[3]-20, 60, 60);
			context.fillStyle = "rgba(0,102,0,.0)";
			context.fill();
			context.lineWidth = 0;
			context.stroke();
		});
	
		stage.add(dot1);
		stage.add(dot2);
		stage.add(dot3);
		stage.add(dot4);
					
		var tooltip = new Kinetic.Shape(function(){
			var context = this.getContext();
			context.beginPath();
			context.fillStyle = "rgba(64,64,64,.5)";
			context.fillRect(-20, 10, 40, 30);
			context.font = "12pt Calibri";
			context.fillStyle = "white";
			context.textBaseline = "top";
			context.fillText(tooltip.text, -12, 15);
		});

		dot1.addEventListener("mousemove", function(){
			var mousePos = stage.getMousePos();
			tooltip.x = 50;
			if (subjectPoint[0] < 140) {
				tooltip.y = subjectPoint[0];}
				else {tooltip.y = subjectPoint[0]-50;};
			tooltip.text = subjectPoints[0];
			tooltip.draw();
		});
 
		dot1.addEventListener("mouseout", function(){
			tooltip.clear();
		});
					
		dot2.addEventListener("mousemove", function(){
			var mousePos = stage.getMousePos();
			tooltip.x = 150;
			if (subjectPoint[1] < 140) {
				tooltip.y = subjectPoint[1];}
				else {tooltip.y = subjectPoint[1]-50;};
			tooltip.text = subjectPoints[1];
			tooltip.draw();
		});
 
		dot2.addEventListener("mouseout", function(){
			tooltip.clear();
		});		            
		 
		dot3.addEventListener("mousemove", function(){
			var mousePos = stage.getMousePos();
			tooltip.x = 250;
			if (subjectPoint[2] < 140) {
				tooltip.y = subjectPoint[2];}
				else {tooltip.y = subjectPoint[2]-50;};
			tooltip.text = subjectPoints[2];
			tooltip.draw();
		});
 
		dot3.addEventListener("mouseout", function(){
			tooltip.clear();
		});
					
		dot4.addEventListener("mousemove", function(){
			var mousePos = stage.getMousePos();
			tooltip.x = 350;
			if (subjectPoint[3] < 140) {
				tooltip.y = subjectPoint[3];}
				else {tooltip.y = subjectPoint[3]-50;};
			tooltip.text = subjectPoints[3];
			tooltip.draw();
		});
 
		dot4.addEventListener("mouseout", function(){
			tooltip.clear();
		}); 
										
		stage.add(tooltip);
		// hide tooltip
		tooltip.clear();
	};
};