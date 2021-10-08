
$(function () {
    console.log("click!");
    var stage = new Konva.Stage({
        container: "bucket",
        height: $(document).height(),
        width: $(document).width()
    });
    var layer = new Konva.Layer();
    document.addEventListener('click', function (event) {
        var cursorX = event.clientX;
        var cursorY = event.clientY;
        console.log(cursorX, cursorY);
        var circle = new Konva.Circle({
            x: cursorX,
            y: cursorY,
            radius: 25,
            fill: 'blue',
        });
        layer.add(circle);
        stage.add(layer);
        //document.body.textContent = 'x:' + cursorX + ', y:' + cursorY;
    });
});