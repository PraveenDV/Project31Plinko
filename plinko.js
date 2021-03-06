class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,15,options);
        this.radius=15

        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}