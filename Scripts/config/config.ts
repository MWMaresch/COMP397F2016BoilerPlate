/*
    Module to store globally accessible values and states for the game.
*/
module config {
    export class Scene {
        public static ENTRANCE : number = 0;
        public static LEFTPATH : number = 1;
        public static RIGHTPATH : number = 2;
        public static FARLEFT : number = 3;
        public static LEFTMIDDLE : number = 4;
        public static RIGHTMIDDLE : number = 5;
        public static FARRIGHT : number = 6;

        public static BADEND1 : number = 7;
        public static BADEND2 : number = 8;
        public static BADEND3 : number = 9;
        public static BADEND4 : number = 10;
        public static BADEND5 : number = 11;
        public static BADEND6 : number = 12;
        public static BADEND7 : number = 13;
        public static GOODEND : number = 14;
    }

    export class Screen {
        public static WIDTH : number = 640;
        public static HEIGHT : number = 480;
        public static CENTER_X : number = 320;
        public static CENTER_Y : number = 240;
    }
    
    export class Game {
        public static FPS : number = 60;
    }
}