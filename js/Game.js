class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value", (data)=>{
      gameState = data.val();
    })
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
 
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //criar as sprites dos carros

    
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

   //chamar a função estática

    //se os jogadores forem diferentes de indefinido, mostrar a estrada e desenhar as sprites dos carros
    
  }
}
