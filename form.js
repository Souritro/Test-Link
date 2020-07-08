class Form{
    constructor(){
         this.inputbox=createInput('Enter Name')
         this.btn=createButton('Submit')
         
    }
    display(){
        var title= createElement('h1');
        title.html('Multiplayer Car Racing Game!')
        title.position(400,100);

        this.inputbox.position(400,500);
        
        this.btn.position(405,520)
        this.btn.mousePressed(function(){
            var username=this.inputbox.value()
            playerCount=playerCount+1;
            player.storeName(username)
            player.updateCount(playerCount)
           this.inputbox.hide()
           this.btn.hide();
        })

            
        }
   //hide(){
     //  this.input
        

   // }
}