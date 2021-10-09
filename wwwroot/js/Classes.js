export class Comment {
    constructor(text, color, offset) {
        this.text = text;
        this.color = color;
        this.offset = offset;
    }
    //returns a div element for this comment
    getDiv(Circle) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("contenteditable", true);
        newDiv.setAttribute("class", Circle.id);
        const newContent = document.createTextNode(this.text);
        newDiv.appendChild(newContent);
        newDiv.setAttribute("style", "width:fit-content;");
        console.log(newDiv.offsetWidth);
        console.log(getTextWidth(this.text, getCanvasFontSize(newDiv)));
        var offsetX = Circle.posX - getTextWidth(newDiv.text, getCanvasFontSize(newDiv)) * 1.3;
        var offsetY = Circle.posY + Circle.radius * (1 + this.offset);
        newDiv.setAttribute("style", "height:25px;position: fixed; width:fit-content; min-width:40px; left:" + offsetX + "px;top:" + offsetY + "px; background-color:" + this.color + ";");
        //set the click listener


        return newDiv;
    }
}
export class Circle {
    constructor(x, y, radius, color) {
        this.posY = y;
        this.posX = x;
        this.radius = radius;
        this.color = color;
        this.comments = new Array();
    }
    addComment(Comment) {
        this.comments.push(Comment)
    }
    comments() {
        return this.comments;
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
