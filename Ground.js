class Ground {

    constructor(x,y,width,height){
      
    var options = {
        isStatic : true
    }

    this.ground = Bodies.rectangle(x,y,width,height,options);
    this.h=height;
    this.w=width;
    World.add(myworld,this.ground)

    }

   display() {
       var pos = this.ground.position ;
       rectMode(CENTER);
       fill("brown");
       rect(pos.x,pos.y,this.w,this.h);
   }

}