var gameBall = {};

gameBall.Boot = function(game){};

gameBall.Boot.prototype = {
    preload : function(){
        this.load.image('loader', './images/loader.png');
        this.load.image('title-background', './images/title-background.jpg');
        this.load.image('title-text', './images/title-text.png');
        this.load.image('ball', './images/ball.png');
        this.load.image('botin', './images/botin.png');        
    },

    create : function(){
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 270;
        this.scale.minHeight = 480;
        this.scale.pageAlignHorizontall = true;
        this.scale.pageAlignVertically = true;
        this.scale.forcePortrait = true;
        this.scale.setScreenSize = true;

        this.input.addPointer();
        this.stage.backgroundColor = '#000000';

        this.state.start('Preloader');
    }
};