Enemy = function (game, type) {
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
    this.type = type;
    this.enemyType= type;
    let key;
    let spawnPosition = {};

    if (type == "brown") {
        key = 'duck_white.png';
        spawnPosition.x = game.rnd.integerInRange(0, game.world.width);
        spawnPosition.y = game.world.height;
        this.enemyValue = 5;
    } else if ((type == "cream")) {
        let keyList = ["creamChoco", "creamMocca", "creamPink"];
        key = keyList[game.rnd.integerInRange(0, keyList.length - 1)];
        spawnPosition.x = game.rnd.integerInRange(0, game.world.width);
        spawnPosition.y = 0;
        this.enemyValue = 20;
    } else if ((type == "fly")) {
        let keyList = ["shipBeige_manned", "shipBlue_manned", "shipGreen_manned", "shipPink_manned", "shipYellow_manned"];
        key = keyList[game.rnd.integerInRange(0, keyList.length - 1)];
        spawnPosition.x = game.world.height;
        spawnPosition.y = game.rnd.integerInRange(0, 1) * game.world.width;
        this.enemyValue = 50;
    } else if ((type == "red")) {
        let keyList = ["spikeMan_jump", "springMan_stand"];
        key = keyList[game.rnd.integerInRange(0, keyList.length - 1)];
        spawnPosition.x = game.rnd.integerInRange(0, 1) * game.world.width;
        spawnPosition.y = 500;
        this.enemyValue = 10;
    } else if ((type == "yellow")) {
        let keyList = ["flyMan_fly", "sun1", "wingMan1"];
        key = keyList[game.rnd.integerInRange(0, keyList.length - 1)];
        spawnPosition.x = game.rnd.integerInRange(0, 1) * game.world.width;
        spawnPosition.y = 500;
        this.enemyValue = 15;
    }

    Phaser.Sprite.call(this, game, 0, 0, key);
    this.anchor.setTo(0.5);
    this.x = spawnPosition.x; //cambiar pq depende de type
    this.y = spawnPosition.y;
    this.scale.setTo(0.5);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.body.allowGravity = false;
    this.body.velocity.x = -100;
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(1, 0)
    //this.game.add.existing(this);
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
    
}