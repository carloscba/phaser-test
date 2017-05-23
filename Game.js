gameBall.Game = function(game) {
    this.ball;
    this.botin;
};

gameBall.Game.prototype = {
    
    create : function(){
        this.physics.startSystem(Phaser.Physics.ARCADE);
        /*
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.restitution = 0.9;
        */
        this.buildWorld();
        this.buildBall();
        this.buildBotin();         
    },

    update : function(){
        this.physics.arcade.collide(this.ball, this.botin, this.hitCallback, null, this);
    },

    buildWorld : function(){
        var gameBackground = this.add.image(this.world.centerX, this.world.centerY, 'game-background');
        gameBackground.anchor.setTo(0.5, 0.5);
    },    

    buildBotin : function(){
        this.botin = this.add.sprite(this.world.centerX, this.world.height-120, 'botin');
        this.botin.anchor.setTo(0.5, 0.5);
        this.botin.scale.x = 1;
        this.botin.scale.y = 1;

        this.physics.arcade.enable(this.botin);
        this.botin.body.allowGravity = 0;
        this.botin.body.immovable = true;
        this.botin.body.collideWorldBounds = true;
        
        //Drag option
        this.botin.inputEnabled = true;
        this.botin.input.enableDrag(true);        
    },        

    buildBall : function(){
        this.ball = this.add.sprite(this.world.centerX, 0, 'ball');
        this.ball.anchor.setTo(0.5, 0.5);
        this.ball.scale.x = 1;
        this.ball.scale.y = 1;

        this.physics.arcade.enable(this.ball);
        this.ball.body.collideWorldBounds = true;
        this.MySetBound(this.ball);

    },        

    MySetBound : function(ball){
        ball.body.gravity.x = this.rnd.integerInRange(-70, 70);
        ball.body.gravity.y = 100 + Math.random() * 100;
        ball.body.bounce.setTo(this.rnd.integerInRange(1,0.8), this.rnd.integerInRange(1,0.8));
    },

    hitCallback : function(ball){
        this.MySetBound(ball);
    },

    deleteBall : function(ball){
        if(ball.y > this.world.height){
            this.resetBall(ball);
        }
    },

    resetBall : function(ball){
        ball.reset(this.rnd.integerInRange(0, this.world.width), 0);
    }





};