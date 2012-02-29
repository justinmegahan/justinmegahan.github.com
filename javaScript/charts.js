

        function chart () { 
                window.addEventListener('load', eventWindowLoaded, false);

                var Debugger = function () { };
                
                Debugger.log = function (message) {
                        try {console.log(message);}
                        catch (exception) {return;}
                }

                function eventWindowLoaded() 
                        {canvasApp();}

                function canvasSupport () 
                        {return Modernizr.canvas;}

                function eventWindowLoaded() 
                        {canvasApp();}

                function canvasApp() {
                   
                        if (!canvasSupport()) {
                                  return;
                        }

                        var science = document.getElementById("science");
                        var context = science.getContext("2d");

                        drawScreen1();

                        function drawScreen1() {

                                var sciencePoint1 = (410 - science1);
                                var sciencePoint2 = (410 - science2);
                                var sciencePoint3 = (410 - science3);
                                var sciencePoint4 = (410 - science4);

                                context.strokeStyle = "black";
                                context.lineWidth = .25;
                                
                                context.beginPath();
                                context.moveTo(25,10);
                                context.lineTo(375, 10);
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.moveTo(25,60);
                                context.lineTo(375, 60);
                                context.stroke();
                                context.closePath();

                                context.beginPath();
                                context.moveTo(25, 110);
                                context.lineTo(375, 110);
                                context.stroke();
                                context.closePath();

                                context.lineWidth = 4;
                                context.beginPath();
                                context.moveTo(25,160);
                                context.lineTo(375, 160);
                                context.stroke();
                                context.closePath();
                                
                                context.fillStyle = "#333333";
                                context.font = "18px _sans";
                                contextBaseline = "top";
                                context.fillText ("2008", 30, 180);
                                context.fillText ("2009", 130, 180);
                                context.fillText ("2010", 230, 180);
                                context.fillText ("2011", 330, 180);
                                
                                context.fillStyle = "#CCCCCC";
                                context.font = "12px _sans";
                                contextBaseline = "top";
                                context.fillText ("400", 5, 14);
                                context.fillText ("350", 5, 64);
                                context.fillText ("300", 5, 114);
                                
                                context.strokeStyle = "#999999";
                                context.lineWidth = 3;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, 106);
                                context.lineTo(150, 107);
                                context.lineTo(250, 104);
                                context.lineTo(350, 103);
                                context.stroke();
                                context.closePath();
                                
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, sciencePoint1);
                                context.lineTo(150, sciencePoint2);
                                context.lineTo(250, sciencePoint3);
                                context.lineTo(350, sciencePoint4);
                                context.shadowOffsetX = 1;
                                context.shadowOffsetY = 1;
                                context.shadowBlur = 4;
                                context.shadowColor = "#CCCCCC";
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(50, sciencePoint1, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(150, sciencePoint2, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(250, sciencePoint3, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(350, sciencePoint4, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                        }
                         
                var math = document.getElementById("math");
                        var context = math.getContext("2d");

                        drawScreen2();

                        function drawScreen2() {
                                
                                var mathPoint1 = (410 - math1);
                                var mathPoint2 = (410 - math2);
                                var mathPoint3 = (410 - math3);
                                var mathPoint4 = (410 - math4);

                                context.strokeStyle = "black";
                                context.lineWidth = .25;
                                
                                context.beginPath();
                                context.moveTo(25,10);
                                context.lineTo(375, 10);
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.moveTo(25,60);
                                context.lineTo(375, 60);
                                context.stroke();
                                context.closePath();

                                context.beginPath();
                                context.moveTo(25, 110);
                                context.lineTo(375, 110);
                                context.stroke();
                                context.closePath();

                                context.lineWidth = 4;
                                context.beginPath();
                                context.moveTo(25,160);
                                context.lineTo(375, 160);
                                context.stroke();
                                context.closePath();
                                
                                context.fillStyle = "#333333";
                                context.font = "18px _sans";
                                contextBaseline = "top";
                                context.fillText ("2008", 30, 180);
                                context.fillText ("2009", 130, 180);
                                context.fillText ("2010", 230, 180);
                                context.fillText ("2011", 330, 180);
                                
                                context.fillStyle = "#CCCCCC";
                                context.font = "12px _sans";
                                contextBaseline = "top";
                                context.fillText ("400", 5, 14);
                                context.fillText ("350", 5, 64);
                                context.fillText ("300", 5, 114);
                                
                                context.strokeStyle = "#999999";
                                context.lineWidth = 3;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, 83);
                                context.lineTo(150, 83);
                                context.lineTo(250, 79);
                                context.lineTo(350, 81);
                                context.stroke();
                                context.closePath();
                                
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, mathPoint1);
                                context.lineTo(150, mathPoint2);
                                context.lineTo(250, mathPoint3);
                                context.lineTo(350, mathPoint4);
                                context.shadowOffsetX = 1;
                                context.shadowOffsetY = 1;
                                context.shadowBlur = 4;
                                context.shadowColor = "#CCCCCC";
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(50, mathPoint1, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(150, mathPoint2, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(250, mathPoint3, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(350, mathPoint4, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                        }

                var english = document.getElementById("reading");
                        var context = english.getContext("2d");

                        drawScreen3();

                        function drawScreen3() {
                                
                                var readingPoint1 = (410 - reading1);
                                var readingPoint2 = (410 - reading2);
                                var readingPoint3 = (410 - reading3);
                                var readingPoint4 = (410 - reading4);

                                context.strokeStyle = "black";
                                context.lineWidth = .25;
                                
                                context.beginPath();
                                context.moveTo(25,10);
                                context.lineTo(375, 10);
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.moveTo(25,60);
                                context.lineTo(375, 60);
                                context.stroke();
                                context.closePath();

                                context.beginPath();
                                context.moveTo(25, 110);
                                context.lineTo(375, 110);
                                context.stroke();
                                context.closePath();

                                context.lineWidth = 4;
                                context.beginPath();
                                context.moveTo(25,160);
                                context.lineTo(375, 160);
                                context.stroke();
                                context.closePath();
                                
                                context.fillStyle = "#333333";
                                context.font = "18px _sans";
                                contextBaseline = "top";
                                context.fillText ("2008", 30, 180);
                                context.fillText ("2009", 130, 180);
                                context.fillText ("2010", 230, 180);
                                context.fillText ("2011", 330, 180);
                                
                                context.fillStyle = "#CCCCCC";
                                context.font = "12px _sans";
                                contextBaseline = "top";
                                context.fillText ("400", 5, 14);
                                context.fillText ("350", 5, 64);
                                context.fillText ("300", 5, 114);
                                
                                context.strokeStyle = "#999999";
                                context.lineWidth = 3;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, 102);
                                context.lineTo(150, 97);
                                context.lineTo(250, 94);
                                context.lineTo(350, 93);
                                context.stroke();
                                context.closePath();
                                
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.lineJoin = 'round';
                                context.beginPath();
                                context.moveTo(50, readingPoint1);
                                context.lineTo(150, readingPoint2);
                                context.lineTo(250, readingPoint3);
                                context.lineTo(350, readingPoint4);
                                context.shadowOffsetX = 1;
                                context.shadowOffsetY = 1;
                                context.shadowBlur = 4;
                                context.shadowColor = "#CCCCCC";
                                context.stroke();
                                context.closePath();
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(50, readingPoint1, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(150, readingPoint2, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(250, readingPoint3, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                                
                                context.beginPath();
                                context.strokeStyle = "#006600";
                                context.lineWidth = 4;
                                context.arc(350, readingPoint4, 2, (Math.PI/180)*0, (Math.PI/180)*360, false);
                                context.stroke();
                                context.closePath()
                        }
                }
        }