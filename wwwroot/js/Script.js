import { Circle, Comment } from './Classes.js';
import { draw } from './Drawing.js';
import { getTextWidth, getCanvasFontSize } from './textWidth.js'
$(function () {
    //prepare canvas for future drawing
    var stage = new Konva.Stage({
        container: "bucket",
        height: $(document).height(),
        width: $(document).width()
    });
    var layer = new Konva.Layer();
    stage.add(layer);
    //array to be filled by circles
    var circleArr = new Array();
    //load circles from DB

    //click listener
    document.addEventListener('click', function (event) {
        //mouse location
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        //hardcoded circle data
        var radius = 25;
        var color = 'blue';
        var textFieldColor = 'grey';
        //check if there's already a circle
        
        for (let i = 0; i < circleArr.length; ++i) {
            
            if (circleArr[i].checkRange(mouseX, mouseY)) {
                //start writing new comment
                const newDiv = document.createElement("div");
                newDiv.setAttribute("contenteditable", true);
                newDiv.setAttribute("class", circleArr[i].id);
                const newContent = document.createTextNode("Hi there and greetings!");
                newDiv.appendChild(newContent);
                newDiv.setAttribute("style", "width:fit-content;");
                console.log(newDiv.offsetWidth);
                console.log(getTextWidth(newDiv.text, getCanvasFontSize(newDiv)));
                var offsetX = circleArr[i].posX - getTextWidth(newDiv.text, getCanvasFontSize(newDiv))*1.3;
                var offsetY = circleArr[i].posY + circleArr[i].radius;
                newDiv.setAttribute("style", "height:25px;position: fixed; width:fit-content; min-width:40px; left:" + offsetX + "px;top:" + offsetY +"px; background-color:" + textFieldColor + ";");
                
                console.log(newDiv);
                document.body.appendChild(newDiv);
                return
            }
        }
        //create circle
        var circ = new Circle(mouseX, mouseY, radius, color)
        //add circle to array
        circleArr.push(circ);
        //add circle to db

        //draw circle on screen
        stage.clear();
        draw(layer, circleArr);
        //document.body.textContent = 'x:' + cursorX + ', y:' + cursorY;
    });
    document.addEventListener('dblclick', function (event) {
        console.log('double');
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        for (let i = 0; i < circleArr.length; ++i) {
            if (circleArr[i].checkRange(mouseX, mouseY)) {
                //remove circle and it's comments from DB

                //remove all the comments of the circle

                //remove the circle
                circleArr.splice(i, 1);
                stage.clear();
                draw(layer, circleArr);
                return
            }
        }
    });
});