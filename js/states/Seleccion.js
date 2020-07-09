Seleccion = function(game){}

Seleccion.prototype = {

	create:function(){

        //FONDO
        this.bg = this.game.add.sprite(0,0,"bg_layer4");
        this.bg.width = this.game.world.width;
        this.bg.height = this.game.world.height;
        //FONDO

        this.normalText = this.game.add.text(0,0,'Normal', {font : "20px Arial",fill: '#000000'});
        this.normalText.anchor.setTo(0.5);
		this.normalText.x = this.game.world.centerX;
        this.normalText.y = 500;
        this.normalText.inputEnabled = true;
        this.normalText.events.onInputDown.add(this.goGameNormal, this);	
        
        this.paraoText = this.game.add.text(0,0,'Parao sin polo', {font : "20px Arial",fill: '#000000'});
        this.paraoText.anchor.setTo(0.5);
		this.paraoText.x = this.game.world.centerX;
        this.paraoText.y = 550;
        this.paraoText.inputEnabled = true;
        this.paraoText.events.onInputDown.add(this.goGameParao, this);		
    },
    goGameNormal:function(sprite, otro){
        this.state.start("Game", true, false, {lifes: 4});
    },
    goGameParao:function(){
        this.state.start("Game", true, false, {lifes: 1});
    }
}