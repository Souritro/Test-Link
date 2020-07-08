class Gamestate{
    constructor(){
        
    }
    getState(){
        var gamestateref =database.ref("gameState");
        gamestateref.on("value", function(data){
            gameState=data.val();

        })

}
    updateState(state){
        database.ref('/').update({
            gameState:state
        })

        
    }
    gamestateChecker(){
        if(gameState===0){
            form1=new Form()
            player=new Player()
            player.getPc();
            form1.display()
        }
    }
}