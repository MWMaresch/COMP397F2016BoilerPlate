var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var GoodEnd = (function (_super) {
        __extends(GoodEnd, _super);
        function GoodEnd() {
            _super.call(this);
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("GoodEnding"));
            this.addChild(this._bgImage);
        }
        GoodEnd.prototype.start = function () {
            console.log("GoodEnding Scene Started");
            // Add button to scene. Register for click callback function
            this._resetButton = new objects.Button("Reset", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._resetButtonClick, this);
            // Add ending scene to global stage container
            stage.addChild(this);
        };
        // Function for when button is pressed
        GoodEnd.prototype._resetButtonClick = function (event) {
            // Change global scene variable to ENTRANCE and change the scene, restarting the game
            scene = config.Scene.ENTRANCE;
            changeScene();
        };
        return GoodEnd;
    }(objects.Scene));
    scenes.GoodEnd = GoodEnd;
})(scenes || (scenes = {}));
//# sourceMappingURL=goodending.js.map