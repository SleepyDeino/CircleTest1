$(function () {
    console.log("click!");
    document.addEventListener('click', function (event) {
        var cursorX = event.clientX;
        var cursorY = event.clientY;
        console.log(cursorX, cursorY);
        document.body.textContent = 'x:' + cursorX + ', y:' + cursorY;
    });
});