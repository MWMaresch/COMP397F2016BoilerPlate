
module scenes {
    export class BadEnd7 extends objects.Scene {

        // Private instance variables
        // Button and background image
        private _resetButton : objects.Button;
        private _bgImage : createjs.Bitmap;

        constructor() 
        {
            super();
            //set the background image
            this._bgImage = new createjs.Bitmap(assets.getResult("BadEnd7"));
            this.addChild(this._bgImage);
        }

        public start() : void { 
            console.log("RightMiddle Scene Started");

            // Add button to scene. Register for click callback function
            this._resetButton = new objects.Button("Reset", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._resetButtonClick, this);

            // Add scene to global stage container
            stage.addChild(this);
        }

        // Function for when button is pressed
        private _resetButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to ENTRANCE and change the scene
            scene = config.Scene.ENTRANCE;
            changeScene();
        }
    }
}