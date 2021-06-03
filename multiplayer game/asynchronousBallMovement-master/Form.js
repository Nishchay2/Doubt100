class Form{
    constructor(){
        this. input=createInput("NAME")
        this. button=createButton("PLAY")
        
        this. greeting=createElement("h3") 
    }
    display(){
        var title=createElement("h2")
        title.html("Car Racing Game")
        title.position(displayWidth/2-50,0)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2 )
         
        this.button.mousePressed (()=>{
            this. button.hide()
            this. input.hide()
            player. name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(player.index)
            this. greeting.html("Hello "+ player.name)
            this. greeting.position(displayWidth/2-70,displayHeight/4)

        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}