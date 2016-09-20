var canvas;
var stage;
var circle;
var eyeL;
var eyeR;
var mouth;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this);
}
function gameLoop(event) {
    var myNewText = new createjs.Text(" AYYYYYYY", "60px Consolas", "#EDEDED");
    circle = new createjs.Shape();
    eyeL = new createjs.Shape();
    eyeR = new createjs.Shape();
    mouth = new createjs.Shape();
    circle.graphics.beginFill("yellow").drawCircle(0, 0, 80);
    eyeL.graphics.beginFill("black").drawCircle(0, 0, 10);
    eyeR.graphics.beginFill("black").drawCircle(0, 0, 10);
    mouth.graphics.beginFill("black").arc(0, 0, 40, 2.5, 0.7, true);
    //mouth.graphics.beginFill("black").arc()
    //Set position of Shape instance.
    circle.x = canvas.clientWidth / 2;
    circle.y = 200;
    eyeL.x = circle.x - 40;
    eyeR.x = circle.x + 40;
    eyeL.y = circle.y;
    eyeR.y = circle.y;
    mouth.x = circle.x;
    mouth.y = circle.y + 4;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    stage.addChild(eyeL);
    stage.addChild(eyeR);
    stage.addChild(mouth);
    stage.addChild(myNewText);
    stage.update();
}
//# sourceMappingURL=game.js.map