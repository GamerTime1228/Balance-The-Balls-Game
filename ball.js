class Ball {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        fill("black");
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        noStroke();
        pop();
        }
}