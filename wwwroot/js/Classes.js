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
    get comment() {
        return this.comments;
    }
    circle() {
        var circle = new Konva.Circle({
            x: this.posX,
            y: this.posY,
            radius: this.radius,
            fill: this.color,
        });
        console.log(circle);
        return circle;
    }
}
