class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
      Player.getplayerinfo()
      if(allplayers!==undefined){
        var display=0
        for(var plr in allplayers){
          if (plr==="player"+player.index)
          fill("red")
          else
          fill("black")
          display=display+20
          textSize(15)
          text(allplayers[plr].name+allplayers[plr].distance,120,display)
        }
      }
      if(keyIsDown(UP_ARROW)&& player.index!==null){
        player.distance=player.distance+50
        player.update(

        )
      }
            
          
        }
      }
    
  

