class Paper{
    constructor(x,y,radius){
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic': false
        }  

    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image= loadImage("Images/paper.png");
    World.add(world, this.body);
    
    }
 

   display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    fill("blue");
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    pop();
    imageMode(RADIUS);
    image(this.image,pos.x,pos.y,this.radius);
   }
   

    
}









