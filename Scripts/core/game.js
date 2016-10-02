/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var entranceScene;
// Preload Assets required
var assetData = [
    { id: "Entrance", src: "../../Assets/images/Entrance.png" },
    { id: "Reset", src: "../../Assets/images/Restart.png" },
    { id: "Back", src: "../../Assets/images/Back.png" },
    { id: "Right", src: "../../Assets/images/Right.png" },
    { id: "Left", src: "../../Assets/images/Left.png" },
    { id: "LeftPathScreen", src: "../../Assets/images/LeftPathScreen.png" },
    { id: "RightPathScreen", src: "../../Assets/images/RightPathScreen.png" },
    { id: "FarLeftScreen", src: "../../Assets/images/FarLeftScreen.png" },
    { id: "FarRightScreen", src: "../../Assets/images/FarRightScreen.png" },
    { id: "LeftMidScreen", src: "../../Assets/images/LeftMidScreen.png" },
    { id: "RightMidScreen", src: "../../Assets/images/RightMidScreen.png" },
    { id: "BadEnd1", src: "../../Assets/images/endings/BadEnd1.png" },
    { id: "BadEnd2", src: "../../Assets/images/endings/BadEnd2.png" },
    { id: "BadEnd3", src: "../../Assets/images/endings/BadEnd3.png" },
    { id: "BadEnd4", src: "../../Assets/images/endings/BadEnd4.png" },
    { id: "BadEnd5", src: "../../Assets/images/endings/BadEnd5.png" },
    { id: "BadEnd6", src: "../../Assets/images/endings/BadEnd6.png" },
    { id: "BadEnd7", src: "../../Assets/images/endings/BadEnd7.png" },
    { id: "GoodEnding", src: "../../Assets/images/endings/GoodEnding.png" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // Register callback function to be run when assets complete loading
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.ENTRANCE;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    //we can remove all children here because it happens in every case
    stage.removeAllChildren();
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.ENTRANCE:
            entranceScene = new scenes.Entrance();
            currentScene = entranceScene;
            console.log("Starting ENTRANCE scene");
            break;
        case config.Scene.LEFTPATH:
            currentScene = new scenes.LeftPath();
            console.log("Starting LEFTPATH scene");
            break;
        case config.Scene.RIGHTPATH:
            currentScene = new scenes.RightPath();
            console.log("Starting RIGHTPATH scene");
            break;
        case config.Scene.FARLEFT:
            currentScene = new scenes.FarLeft();
            console.log("Starting FARLEFT scene");
            break;
        case config.Scene.FARRIGHT:
            currentScene = new scenes.FarRight();
            console.log("Starting FARRIGHT scene");
            break;
        case config.Scene.LEFTMIDDLE:
            currentScene = new scenes.LeftMiddle();
            console.log("Starting LEFTMIDDLE scene");
            break;
        case config.Scene.RIGHTMIDDLE:
            currentScene = new scenes.RightMiddle();
            console.log("Starting RIGHTMIDDLE scene");
            break;
        case config.Scene.BADEND1:
            currentScene = new scenes.BadEnd1();
            console.log("Starting BADEND1 scene");
            break;
        case config.Scene.BADEND2:
            currentScene = new scenes.BadEnd2();
            console.log("Starting BADEND2 scene");
            break;
        case config.Scene.BADEND3:
            currentScene = new scenes.BadEnd3();
            console.log("Starting BADEND3 scene");
            break;
        case config.Scene.BADEND4:
            currentScene = new scenes.BadEnd4();
            console.log("Starting BADEND4 scene");
            break;
        case config.Scene.BADEND5:
            currentScene = new scenes.BadEnd5();
            console.log("Starting BADEND5 scene");
            break;
        case config.Scene.BADEND6:
            currentScene = new scenes.BadEnd6();
            console.log("Starting BADEND6 scene");
            break;
        case config.Scene.BADEND7:
            currentScene = new scenes.BadEnd7();
            console.log("Starting BADEND7 scene");
            break;
        case config.Scene.GOODEND:
            currentScene = new scenes.GoodEnd();
            console.log("Starting GOODEND scene");
            break;
    }
}
//# sourceMappingURL=game.js.map