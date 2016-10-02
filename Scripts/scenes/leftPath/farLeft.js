var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var FarLeft = (function (_super) {
        __extends(FarLeft, _super);
        function FarLeft() {
            _super.call(this);
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("FarLeftScreen"));
            this.addChild(this._bgImage);
        }
        FarLeft.prototype.start = function () {
            console.log("FarLeft Scene Started");
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
        FarLeft.prototype._rightButtonClick = function (event) {
            // Change global scene variable to an ending. Call global changeScene() function
            scene = config.Scene.BADEND2;
            changeScene();
        };
        FarLeft.prototype._leftButtonClick = function (event) {
            // Change global scene variable to an ending. Call global changeScene() function
            scene = config.Scene.BADEND1;
            changeScene();
        };
        return FarLeft;
    }(objects.Scene));
    scenes.FarLeft = FarLeft;
})(scenes || (scenes = {}));
//# sourceMappingURL=farleft.js.map