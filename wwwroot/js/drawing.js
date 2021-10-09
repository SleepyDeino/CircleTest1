export function draw(layer, circleArr) {
    layer.destroyChildren();
    for (let i = 0; i < circleArr.length; ++i) {
        //circleArr is an arr of Circle objects, which have a circle function to make a Knova circle
        layer.add(circleArr[i].konvaCircle());
    }
    layer.draw();
}