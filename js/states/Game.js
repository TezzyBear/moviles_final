Game = function (game) { }

Game.prototype = {
	init: function (data) {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.lifes = data.lifes;
	},
	create: function () {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;

		//FONDO
		this.bg = this.game.add.sprite(0, 0, "bg_layer4");
		this.bg.width = this.game.world.width;
		this.bg.height = this.game.world.height;
		//FONDO

		this.player = new Player(this.game, { x: 100, y: 100 });
		this.player.createBullet.add(this.generateBullet, this);
		this.platforms = this.game.add.group();
		this.createPlatforms();
		console.log("Local Storage: " + localStorage.maxScore);
		if (localStorage.maxScore != null) {
			this.maxScore = parseInt(localStorage.maxScore);
		} else {
			this.maxScore = 0;
		}

		this.score = 0;

		this.lifesText = this.game.add.text(0, 0, 'Life Points: ' + this.lifes, { font: "20px Arial", fill: '#FFFFFF' });
		this.lifesText.x = this.game.world.centerX;
		this.lifesText.y = 30;
		this.lifesText.anchor.setTo(0.5);

		this.scoreText = this.game.add.text(0, 0, 'Score: 0', { font: "20px Arial", fill: '#FFFFFF' });
		this.scoreText.x = this.game.world.width - 160;
		this.scoreText.y = 30;
		this.scoreText.anchor.setTo(0.5);

		this.maxScoreText = this.game.add.text(0, 0, 'Max Score: ' + this.maxScore, { font: "20px Arial", fill: '#FFFFFF' });
		this.maxScoreText.x = 160;
		this.maxScoreText.y = 30;
		this.maxScoreText.anchor.setTo(0.5);

		this.enemies = this.game.add.group();
		this.bullets = this.game.add.group();

		let wave1 = this.createWave(4, ['red'], 8, 0);
		let wave2 = this.createWave(8, ['red', 'yellow'], 6, wave1);
		let wave3 = this.createWave(16, ['red', 'yellow', 'fly'], 4, wave2);
		let wave4 = this.createWave(32, ['red', 'yellow', 'fly', 'brown'], 3, wave3);
		let wave5 = this.createWave(64, ['red', 'yellow', 'fly', 'brown', 'cream'], 2, wave4);
	},
	update: function () {
		this.game.physics.arcade.collide(this.player, this.platforms);
		this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyCollision, null, this);
		this.game.physics.arcade.overlap(this.bullets, this.enemies, this.bulletCollision, null, this);
	},
	createPlatforms: function () {

		let platformLeft1 = new Platform(this.game, { x: this.game.world.centerX - 250 - 70, y: 550 });
		let platformLeft2 = new Platform(this.game, { x: this.game.world.centerX - 250, y: 550 });
		let platformLeft3 = new Platform(this.game, { x: this.game.world.centerX - 250 + 70, y: 550 });
		let platformCenter1 = new Platform(this.game, { x: this.game.world.centerX - 70, y: 450 });
		let platformCenter2 = new Platform(this.game, { x: this.game.world.centerX, y: 450 });
		let platformCenter3 = new Platform(this.game, { x: this.game.world.centerX + 70, y: 450 });
		let platformRight1 = new Platform(this.game, { x: this.game.world.centerX + 250 - 70, y: 550 });
		let platformRight2 = new Platform(this.game, { x: this.game.world.centerX + 250, y: 550 });
		let platformRight3 = new Platform(this.game, { x: this.game.world.centerX + 250 + 70, y: 550 });

		this.platforms.add(platformLeft1);
		this.platforms.add(platformLeft2);
		this.platforms.add(platformLeft3);
		this.platforms.add(platformCenter1);
		this.platforms.add(platformCenter2);
		this.platforms.add(platformCenter3);
		this.platforms.add(platformRight1);
		this.platforms.add(platformRight2);
		this.platforms.add(platformRight3);
	},
	createWave: function (nEnemies, typeEnemies, spawnTimeEnemies, startTime) {

		let totalTime = spawnTimeEnemies * (nEnemies + 1);

		this.game.time.events.add(Phaser.Timer.SECOND * startTime, function () {
			this.game.time.events.repeat(Phaser.Timer.SECOND * spawnTimeEnemies, nEnemies, function () {
				let enemyType = typeEnemies[this.rnd.integerInRange(0, typeEnemies.length - 1)]
				console.log("Type", enemyType);
				let enemy = new Enemy(this.game, enemyType);
				this.enemies.add(enemy);
			}, this);
		}, this);

		console.log("startTime: ", startTime);
		return totalTime + startTime;
	},
	generateBullet: function (position, direction, type) {
		let bullet = new Bullet(this.game, position, direction, type);
		this.bullets.add(bullet);
	},
	bulletCollision: function (bullet, enemy) {
		console.log(bullet.bulletType, enemy.enemyType)
		if (bullet.bulletType == enemy.enemyType) {
			this.score += enemy.enemyValue;
			this.scoreText.text = "Score: " + this.score;			
			enemy.kill();
		}
		bullet.kill();
	},
	enemyCollision: function (player, enemy) {
		enemy.kill();
		this.lifes--;
		this.lifesText.text = "Life Points: " + this.lifes;
		if (this.lifes >= 0) {
			if (this.score > this.maxScore) {
				localStorage.maxScore = parseInt(this.score);
			}
			this.state.start("GameOver", true, false, {score: this.score});
		}
	}
}