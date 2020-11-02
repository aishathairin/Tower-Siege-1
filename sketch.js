const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16;

var polygon,polyImg;

function preload()
{
    polyImg = loadImage("Images/Polygon.png");
}

function setup()
{
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

      polygon = createSprite(70,479,20,20);
      polygon.addImage("shape",polyImg);
      polygon.scale = 0.1;
 
    //creating the objects
        ground = new Ground(400,height,800,20);
        stand = new Ground(250, 515, 150, 10);


    //creating the blocks

    //level 1
    block1 = new Block(250,450,20,20);

    //level 2
    block2 = new Block(230,465,20,20);
    block3 = new Block(250,465,20,20);
    block4 = new Block(270,465,20,20);

    
    //level 3
    block5 = new Block(209,483,20,20);
    block6 = new Block(229,483,20,20);
    block7 = new Block(249,483,20,20);
    block8 = new Block(269,483,20,20);
    block9 = new Block(289,483,20,20);


    //level 4
    block10 = new Block(189,500,20,20);
    block11 = new Block(209,500,20,20);
    block12 = new Block(229,500,20,20);
    block13 = new Block(249,500,20,20);
    block14 = new Block(269,500,20,20);
    block15 = new Block(289,500,20,20);
    block16 = new Block(309,500,20,20);

    var options = 
    {
      bodyA : this.pointB
    }

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x : 100, y : 200},options);

}

function draw() 
{
  background("black"); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display(); 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  stand.display();
  ground.display();

  drawSprites();
}

