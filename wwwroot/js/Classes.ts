class TSCircle {
    posY: Number;
    posX: Number;
    radius: Number;
    color: string;
    comments?: TSComment[];
    constructor(posY: Number, posX: Number, radius: Number, color: string) {
        this.posY = posY;
    }
}

class TSComment {
    text: string;
    color: string;
    constructor(text: string, color: string) {
        this.text = text;
        this.color = color;
    }
}