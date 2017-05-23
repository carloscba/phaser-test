gameBall.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.titleText;
};

gameBall.StartMenu.prototype = {

    create: function(){
        startBG = this.add.image(0,0,'title-background');
        startBG.inputEnabled = true;
        startBG.events.onInputDown.addOnce(this.startGame, this);

        titleText = this.add.image(this.world.centerX, this.world.centerY, 'title-text');
        titleText.anchor.setTo(0.5, 0.5);

        startPrompt = this.add.bitmapText(this.world.centerX, this.world.centerY+50, 'littera', 'Start the game', 36);
        startPrompt.anchor.setTo(0.5, 0.5);
    },

    startGame: function(pointer){
        this.state.start('Game');
    }
}