var canvas : HTMLElement;
var stage : createjs.Stage;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop, this)
}

function gameLoop(event : createjs.TickerEvent) : void
{
    var myNewText : createjs.Text = new createjs.Text("Test", "60px Consolas", "#000000");

    stage.addChild(myNewText);

    stage.update();
}