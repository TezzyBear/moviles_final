Bullet = function (game, position, direction, type) {   
    this.type = type; 
    this.bulletType = type;;
    Phaser.Sprite.call(this,game,position.x,position.y,type);
    this.anchor.setTo(0.5);    
    this.scale.setTo(0.2);
    this.game.physics.arcade.enable(this);
    this.body.velocity.x = 300 * direction;
    this.body.allowGravity = false;
    //this.game.add.existing(this);
}

Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.update = function(){
	if(this.x > this.game.width){
		this.kill();
    }
    if(this.x < 0){
		this.kill();
	}
}

