/*
    Module to store globally accessible values and states for the game.
*/
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.ENTRANCE = 0;
        Scene.LEFTPATH = 1;
        Scene.RIGHTPATH = 2;
        Scene.FARLEFT = 3;
        Scene.LEFTMIDDLE = 4;
        Scene.RIGHTMIDDLE = 5;
        Scene.FARRIGHT = 6;
        Scene.BADEND1 = 7;
        Scene.BADEND2 = 8;
        Scene.BADEND3 = 9;
        Scene.BADEND4 = 10;
        Scene.BADEND5 = 11;
        Scene.BADEND6 = 12;
        Scene.BADEND7 = 13;
        Scene.GOODEND = 14;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map