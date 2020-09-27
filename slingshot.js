class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10
    }
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
  }

  attach(bodyA) {
    this.sling.bodyA = bodyA;
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke(48, 22, 8);
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      pop();
    }
  }

}
