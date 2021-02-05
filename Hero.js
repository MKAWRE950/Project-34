class Hero{
    constructor(x,y,radius){
        var options = {
            density : 1,
            frictionAir : 0.05  
        }

        this.radius = radius;
        this.image = loadImage("Superhero-01.png");
        this.body = Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}