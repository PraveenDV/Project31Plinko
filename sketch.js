const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=300;

var division;
var plinko;

function setup() {
  createCanvas(820,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,790,800,10);

  for(var k=0; k<=this.width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    
}
  

for(var a=15;a<=this.width-10;a+=50){
  plinkos.push(new Plinko(a,75));
}

for(var b=15;b<=this.width-10;b+=50){
  plinkos.push(new Plinko(b,175));
}

for(var b=15;b<=this.width-10;b+=50){
  plinkos.push(new Plinko(b,275));
}

for(var b=15;b<=this.width-10;b+=50){
  plinkos.push(new Plinko(b,375));
}

  
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();


  
 
  for(var m=0;m<plinkos.length;m++){
    plinkos[m].display();
  }
  

for(var i=0;i<divisions.length;i++){
  divisions[i].display();
}

if(frameCount%50===0){
  particles.push(new Particle(random(10,700),0));
}

for(var f=0;f<particles.length;f++){
  particles[f].display();
}



  

}