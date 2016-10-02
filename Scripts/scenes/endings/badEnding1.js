var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var BadEnd1 = (function (_super) {
        __extends(BadEnd1, _super);
        function BadEnd1() {
            _super.call(this);
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("BadEnd1"));
            this.addChild(this._bgImage);
        }
        BadEnd1.prototype.start = function () {
            console.log("RightMiddle Scene Started");
            // Add button to scene. Register for click callback function
            this._resetButton = new objects.Button("Reset", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._resetButtonClick, this);
            // Add scene to global stage container
            stage.addChild(this);
        };
        // Function for when button is pressed
        BadEnd1.prototype._resetButtonClick = function (event) {
            // Change global scene variable to ENTRANCE and change the scene, restarting the game
            scene = config.Scene.ENTRANCE;
            changeScene();
        };
        return BadEnd1;
    }(objects.Scene));
    scenes.BadEnd1 = BadEnd1;
})(scenes || (scenes = {}));
//# sourceMappingURL=badending1.js.map