GameOver = function(game){}

GameOver.prototype = {
    init : function(data){
        this.score = data.score;
    },
    create : function(){       
         //FONDO
         this.bg = this.game.add.sprite(0,0,"bg_layer4");
         this.bg.width = this.game.world.width;
         this.bg.height = this.game.world.height;
         //FONDO
 
         this.tituloText = this.game.add.text(0,0,'Game Over!', {font : "20px Arial",fill: '#000000'});
         this.tituloText.anchor.setTo(0.5);
         this.tituloText.x = this.game.world.centerX;
         this.tituloText.y = 500;

         this.tituloText = this.game.add.text(0,0,'Score: ' + this.score , {font : "20px Arial",fill: '#000000'});
         this.tituloText.anchor.setTo(0.5);
         this.tituloText.x = this.game.world.centerX;
         this.tituloText.y = 550;
         
         this.game.time.events.add(Phaser.Timer.SECOND * 3, function(){
            this.state.start("Menu");
		}, this);
    }
}