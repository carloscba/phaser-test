gameBall.Preloader = function(game){
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

gameBall.Preloader.prototype = {

    preload: function(){
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY+50, 'loader');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        
        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'title-text');
        this.titleText.anchor.setTo(0.5, 0.5);

        this.load.bitmapFont('littera', 'fonts/font.png', 'fonts/font.fnt');
    },

    create: function(){
        this.preloadBar.cropEnabled = false;
    },    

    update: function(){
        this.ready = true;
        this.state.start('StartMenu');
    },    

}