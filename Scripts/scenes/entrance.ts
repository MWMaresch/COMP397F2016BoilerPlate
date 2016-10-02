
module scenes {
    export class Entrance extends objects.Scene {

        // Private instance variables
        // Buttons and background image
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _bgImage : createjs.Bitmap;

        // Entrance Class Contructor
        constructor()
        {
            super();
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("Entrance"));
            this.addChild(this._bgImage);
        }

        public start() : void {
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
        }

        // Functions for when buttons are pressed
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to RIGHTPATH. Call global changeScene() function
            scene = config.Scene.RIGHTPATH;
            changeScene();
        }
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to LEFTPATH. Call global changeScene() function
            scene = config.Scene.LEFTPATH;
            changeScene();
        }
    }
}