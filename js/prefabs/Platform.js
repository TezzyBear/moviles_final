Platform = function (game, position) {    
    Phaser.Sprite.call(this,game,0,0,"choco");
    this.anchor.setTo(0.5);
    this.x = position.x;
    this.y = position.y;
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.body.allowGravity = false;
    //this.game.add.existing(this);
}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;

