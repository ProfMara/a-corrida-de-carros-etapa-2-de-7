class Player {
  constructor(){
    this.nome = null;
    this.indice = 0;
    this.posicaoX = 0;
    this.posicaoY = 0;
  }

  addPlayer() {

    if(this.indice ==1){
      this.posicaoX = width/2-100;
    }
    else{
      this.posicaoX = width/2+100;
    }

    database.ref("players/player"+this.indice).set({
      nome:this.nome,
      posicaoX:this.posicaoX,
      posicaoY:this.posicaoY,
      
    })
   
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  
  //função estática que pega todos os players do banco de dados e guarda em uma variável
  
}
