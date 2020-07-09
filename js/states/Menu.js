Menu = function(game){}

Menu.prototype = {

	create:function(){

        //FONDO
        this.bg = this.game.add.sprite(0,0,"bg_layer4");
        this.bg.width = this.game.world.width;
        this.bg.height = this.game.world.height;
        //FONDO

        this.tituloText = this.game.add.text(0,0,'Examen Final', {font : "20px Arial",fill: '#000000'});
        this.tituloText.anchor.setTo(0.5);
		this.tituloText.x = this.game.world.centerX;
        this.tituloText.y = 500;
        
        this.jugarText = this.game.add.text(0,0,'Jugar', {font : "20px Arial",fill: '#000000'});
        this.jugarText.anchor.setTo(0.5);
		this.jugarText.x = this.game.world.centerX;
        this.jugarText.y = 550;
        this.jugarText.inputEnabled = true;
        this.jugarText.events.onInputDown.add(this.goGame, this);		
    },
    goGame:function(){
        this.state.start("Seleccion");
    }
}