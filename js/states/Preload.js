Preload = function(game){}

Preload.prototype = {
	preload : function(){		

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;

		//BROWN
		this.load.image("duck_outline_brown","assets/brown/duck_outline_brown.png");
		this.load.image("duck_outline_target_brown","assets/brown/duck_outline_target_brown.png");
		this.load.image("duck_white","assets/brown/duck_white.png");

		//BULLETS
		this.load.image("brown","assets/bullets/brown.png");
		this.load.image("cream","assets/bullets/cream.png");
		this.load.image("fly","assets/bullets/fly.png");
		this.load.image("red","assets/bullets/red.png");
		this.load.image("yellow","assets/bullets/yellow.png");

		//CREAM
		this.load.image("creamChoco","assets/cream/creamChoco.png");
		this.load.image("creamMocca","assets/cream/creamMocca.png");
		this.load.image("creamPink","assets/cream/creamPink.png");

		//FLOOR
		this.load.image("choco","assets/floor/choco.png");

		//FLY
		this.load.image("shipBeige_manned","assets/fly/shipBeige_manned.png");
		this.load.image("shipBlue_manned","assets/fly/shipBlue_manned.png");
		this.load.image("shipGreen_manned","assets/fly/shipGreen_manned.png");
		this.load.image("shipPink_manned","assets/fly/shipPink_manned.png");
		this.load.image("shipYellow_manned","assets/fly/shipYellow_manned.png");

		//RED
		this.load.image("spikeMan_jump","assets/red/spikeMan_jump.png");
		this.load.image("springMan_stand","assets/red/springMan_stand.png");

		//YELLOW
		this.load.image("flyMan_fly","assets/yellow/flyMan_fly.png");
		this.load.image("sun1","assets/yellow/sun1.png");
		this.load.image("wingMan1","assets/yellow/wingMan1.png");

		//.		
		this.load.image("bg_layer4","assets/bg_layer4.png");
		this.load.spritesheet("dude","assets/dude.png",32,48);
	},
	create:function(){
		this.state.start("Menu");
	}
}