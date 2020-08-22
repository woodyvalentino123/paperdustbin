
class Dustbin {
    constructor (x,y,width,height,options){
    var options = {
        
        isStatic: true
    }
    this.image = loadImage("Sprites/dustbingreen.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
   imageMode(CENTER);
    fill("red");
 image(this.image,pos.x,pos.y,this.width,this.height+200);


}
}