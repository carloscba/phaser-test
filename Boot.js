var gameBall = {};

gameBall.Boot = function(game){};

gameBall.Boot.prototype = {
    preload : function(){
        this.load.image('loader', './images/loader.png');
        this.load.image('title-background', './images/title-background.jpg');
        this.load.image('game-background', './images/game-background.jpg');
        this.load.image('title-text', './images/title-text.png');
        this.load.image('ball', './images/ball.png');
        this.load.image('botin', './images/botin.png');        
        this.load.bitmapFont('littera', 'fonts/font.png', 'fonts/font.fnt');
    },

    create : function(){
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        /*this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;*/
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.scale.parentIsWindow = false;        
        this.scale.minWidth = 375;
        this.scale.minHeight = 667;
        this.scale.pageAlignHorizontall = true;
        this.scale.pageAlignVertically = true;
        this.scale.forcePortrait = false;
        this.scale.setScreenSize = false;

        this.input.addPointer();
        this.stage.backgroundColor = '#000000';

        this.state.start('Preloader');
    }
};