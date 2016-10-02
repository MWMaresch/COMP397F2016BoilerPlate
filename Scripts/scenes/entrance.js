var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Entrance = (function (_super) {
        __extends(Entrance, _super);
        // Entrance Class Contructor
        function Entrance() {
            _super.call(this);
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("Entrance"));
            this.addChild(this._bgImage);
        }
        Entrance.prototype.start = function () {
            console.log("Entrance Scene Started");
            // Add buttons to scene. Register for click callback function
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("Right", config.Screen.CENTER_X + 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);
            // Add Entrance scene to global stage container
            stage.addChild(this);
        };
        // Functions for when buttons are pressed
        Entrance.prototype._rightButtonClick = function (event) {
            // Change global scene variable to RIGHTPATH. Call global changeScene() function
            scene = config.Scene.RIGHTPATH;
            changeScene();
        };
        Entrance.prototype._leftButtonClick = function (event) {
            // Change global scene variable to LEFTPATH. Call global changeScene() function
            scene = config.Scene.LEFTPATH;
            changeScene();
        };
        return Entrance;
    }(objects.Scene));
    scenes.Entrance = Entrance;
})(scenes || (scenes = {}));
//# sourceMappingURL=entrance.js.map