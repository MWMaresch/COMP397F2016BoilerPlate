var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var LeftPath = (function (_super) {
        __extends(LeftPath, _super);
        function LeftPath() {
            _super.call(this);
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("LeftPathScreen"));
            this.addChild(this._bgImage);
        }
        LeftPath.prototype.start = function () {
            console.log("LeftPath Scene Started");
            // Add buttons to scene. Register for click callback functions
            this._leftButton = new objects.Button("Left", config.Screen.CENTER_X - 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            this._rightButton = new objects.Button("Right", config.Screen.CENTER_X + 130, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            this._leftButton.on("click", this._leftButtonClick, this);
            this._rightButton.on("click", this._rightButtonClick, this);
            // Add scene to global stage container
            stage.addChild(this);
        };
        // Functions for when buttons are pressed
        LeftPath.prototype._rightButtonClick = function (event) {
            // Change global scene variable to LEFTMIDDLE. Call global changeScene() function
            scene = config.Scene.LEFTMIDDLE;
            changeScene();
        };
        LeftPath.prototype._leftButtonClick = function (event) {
            // Change global scene variable to FARLEFT. Call global changeScene() function
            scene = config.Scene.FARLEFT;
            changeScene();
        };
        return LeftPath;
    }(objects.Scene));
    scenes.LeftPath = LeftPath;
})(scenes || (scenes = {}));
//# sourceMappingURL=leftpath.js.map