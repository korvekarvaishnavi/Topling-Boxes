class Box{

constructor(x,y,width,height){

    var options = {
        restitution : 0.4,
        density : 0.5,
        friction : 0.3
    }
    this.box = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height;
    World.add(myworld,this.box);
}

display(){
   var pos = this.box.position;
   var angle = this.box.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   fill("purple")
   rectMode(CENTER);
   rect(0,0,this.w,this.h);
   pop();

}




}