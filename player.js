class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=0;
    }
    getPc(){
        var pcountref =database.ref("playerCount");
        pcountrref.on("value", function(data){
            playerCount=data.val();

        })

    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    storeName(name){
        var playerIndex='Players:'+playerCount
        database.ref(playerIndex).set({
            Name:this.name
        })
    }
}