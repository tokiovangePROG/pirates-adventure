class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/CANON.png");
    this.cannon_base = loadImage("assets/cannon_base.png");
  }
  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
      this.angle += 0.02;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
      this.angle -= 0.02;
    }

    fill("#712F26");
   push();
   translate(this.x+100,this.y+150);
   rotate(this.angle);
   fill("#51484F");
   //rect(-this.x,this.y,-this.width,-this.height);
   //arc(this.x+68,this.y+210,60,60,PI,TWO_PI);
   imageMode(CENTER);
   image(this.cannon_image,0 ,0,this.width+160,this.height+160);
   pop();
   image(this.cannon_base,135,145,250,190);
   noFill();
 }
}
