export class Comment {
    constructor(text, color) {
        this.text = text;
        this.color = color;
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
    circle() {
        var circle = new Konva.Circle({
            x: this.posX,
            y: this.posY,
            radius: this.radius,
            fill: this.color,
        });
        return circle;
    }
    checkRange(x, y) {
        console.log(x >= this.posX - this.radius);
        console.log(x <= this.poxX + this.radius);
        console.log(y >= this.posY - this.radius);
        console.log(y <= this.posY + this.radius);
        console.log("----------------------------")
        if (x >= this.posX - this.radius &&
            x <= this.posX + this.radius &&
            y >= this.posY - this.radius &&
            y <= this.posY + this.radius) {
            console.log('circle!!!')
            return true
        }
        return false
    }
}
