import { getTextWidth, getCanvasFontSize } from './textWidth.js'
export class Comment {
    constructor(text, color, offset) {
        this.text = text;
        this.color = color;
        this.offset = offset;
    }
    //returns a div element for this comment
    getDiv(Circle) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", Circle.id);
        const newContent = document.createTextNode(this.text);
        newDiv.appendChild(newContent);
        //set all attributes needed for this project
        newDiv.setAttribute("contenteditable", true);
        var offsetX = Circle.posX - Math.max(getTextWidth(newDiv.innerHTML, getCanvasFontSize(newDiv)), 40) / 2;
        var offsetY = Circle.posY + Circle.radius * (1 + this.offset);
        newDiv.setAttribute("style", "height:25px;position: fixed; width:fit-content; min-width:40px; left:" + offsetX + "px;top:" + offsetY + "px; background-color:" + this.color + ";");
        //set the click listener
        newDiv.addEventListener('click', function (event) {
            event.stopPropagation();
            return;
        });
        newDiv.addEventListener("focusout", function (event) {
            var offsetX = Circle.posX - Math.max(getTextWidth(newDiv.innerHTML, getCanvasFontSize(newDiv)), 40) / 2;
            newDiv.style.setProperty("left", offsetX + 'px');
            event.stopPropagation();
        }, false);
        newDiv.addEventListener("keypress", function (event) {
            if (event.keyCode === 13) {
                
                // Cancel the default action, if needed
                event.preventDefault();
                
                var offsetX = Circle.posX - Math.max(getTextWidth(newDiv.innerHTML, getCanvasFontSize(newDiv)), 40) / 2;
                newDiv.style.setProperty("left", offsetX + 'px');
                return false;
            }
        }, false);
        return newDiv;
    }
}
export class Circle {
    constructor(x, y, radius, color, id) {
        this.posY = y;
        this.posX = x;
        this.radius = radius;
        this.color = color;
        this.id = id;
        this.comments = new Array();
    }
    addComment(Comment) {
        this.comments.push(Comment)
    }
    //get a konva circle from the circle class
    konvaCircle() {
        var circle = new Konva.Circle({
            x: this.posX,
            y: this.posY,
            radius: this.radius,
            fill: this.color,
        });
        return circle;
    }
    //check if given position is inside the circle (or well, the square around said circle)
    checkRange(x, y) {
        if (x >= this.posX - this.radius &&
            x <= this.posX + this.radius &&
            y >= this.posY - this.radius &&
            y <= this.posY + this.radius) {
            return true
        }
        return false
    }
}
