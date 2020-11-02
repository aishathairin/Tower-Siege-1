class Block {
    constructor(x, y, width, height){
        var options = 
        {
             isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        fill("blue");
        translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

      }
   };