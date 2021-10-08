import { Circle, Comment } from './Classes.js';
import { draw } from './drawing.js';
$(function () {
    console.log("click!");
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
        //hardcoded circle data
        var radius = 25;
        var color = 'blue';
        var circ = new Circle(event.clientX, event.clientY, radius, color)
        //add circle to array
        circleArr.splice(0, 1, circ);
        //add circle to db

        //draw circle on screen
        console.log(circleArr);
        stage.clear();
        draw(layer, circleArr);
        
        
        //document.body.textContent = 'x:' + cursorX + ', y:' + cursorY;
    });
});