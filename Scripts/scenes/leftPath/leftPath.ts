
module scenes {
    export class LeftPath extends objects.Scene {

        // Private instance variables
        // Buttons and background image
        private _leftButton : objects.Button;
        private _rightButton : objects.Button;
        private _bgImage : createjs.Bitmap;

        constructor()
        {
            super();
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("LeftPathScreen"));
            this.addChild(this._bgImage);
        }

        public start() : void {
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
        }

        // Functions for when buttons are pressed
        private _rightButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to LEFTMIDDLE. Call global changeScene() function
            scene = config.Scene.LEFTMIDDLE;
            changeScene();
        }
        private _leftButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to FARLEFT. Call global changeScene() function
            scene = config.Scene.FARLEFT;
            changeScene();
        }
    }
}