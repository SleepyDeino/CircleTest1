import { Circle, Comment } from './Classes.js';
import { draw } from './Drawing.js';

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
        var lastID = 0;
        for (let i = 0; i < circleArr.length; ++i) {
            
            if (circleArr[i].checkRange(mouseX, mouseY)) {
                //start writing new comment
                var offset = circleArr[i].comments.length;
                var com = new Comment("comment " + offset, textFieldColor, offset);
                circleArr[i].addComment(com);
                document.body.appendChild(com.getDiv(circleArr[i]));
                return
            }
            lastID = circleArr[i].id;
        }
        //create circle
        var circ = new Circle(mouseX, mouseY, radius, color, lastID+1)
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
                var elements = document.getElementsByClassName(circleArr[i].id);
                while (elements.length > 0) {
                    elements[0].parentNode.removeChild(elements[0]);
                }
                //remove the circle
                circleArr.splice(i, 1);
                stage.clear();
                draw(layer, circleArr);
                return
            }
        }
    });
});