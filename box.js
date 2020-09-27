class Box extends BaseClass {
  constructor(x, y, width, height, image) {
    super(x, y, width, height);
    this.image = loadImage(image || "wood1.png");
    this.visibility = 255;
  }

}
  function display(){
   
  if(this.body.speed < 3){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.visiblity = this.visiblity - 5;
    tint(255,this.visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
  
  
}



