Player = function (game, position) {
    Phaser.Sprite.call(this, game, 0, 0, "dude");
    this.anchor.setTo(0.5);
    this.x = position.x;
    this.y = position.y;
    this.orientation = -1;
    this.animations.add("moving", [0, 1, 2, 3], 8, true);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.keys = this.game.input.keyboard.createCursorKeys();
    this.createBullet = new Phaser.Signal();
    this.bulletCooldownTimer = 200;
    this.bulletTimer = 0;
    this.game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.jump = function () {
    this.body.velocity.y = -500;;
}

Player.prototype.shoot = function (type) {

    let position = {x: this.x, y: this.y};
    let direction = this.orientation;
    this.createBullet.dispatch(position, direction, type);
}

Player.prototype.update = function () {

    this.bulletTimer += this.game.time.elapsed;
    if(this.bulletTimer > this.bulletCooldownTimer){        
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this.shoot("brown");
            this.bulletTimer = 0;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.shoot("cream");
            this.bulletTimer = 0;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this.shoot("fly");
            this.bulletTimer = 0;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.F)) {
            this.shoot("red");
            this.bulletTimer = 0;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.G)) {
            this.shoot("yellow");
            this.bulletTimer = 0;
        }
    }

    if (this.keys.left.isDown) {
        this.body.velocity.x = -150;
        this.scale.setTo(1, 1);
        this.orientation = -1;
        this.play("moving");
    }
    else if (this.keys.right.isDown) {
        this.body.velocity.x = 150;
        this.scale.setTo(-1, 1);
        this.orientation = 1;
        this.play("moving");
    } else {
        this.body.velocity.x = 0;
        this.animations.stop();
        this.frame = 3;
    }
    if (this.keys.up.isDown && (this.body.touching.down || this.body.blocked.down)) {
        this.jump();
    }
}