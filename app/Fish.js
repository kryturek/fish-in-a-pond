class Fish{
    constructor(x, y, m){
        this.pos = createVector(x, y);
        this.mass = m;
        this.radius = sqrt(this.mass);
        this.focused = false;

        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);

    }

    move(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.set(0, 0);
    }

    show(){
        noStroke();
        fill(255, 255, 100);
        ellipse(this.pos.x, this.pos.y, this.radius*2);
    }

    applyForce(force){
        let adjustedForce = p5.Vector.div(force, this.mass);
        this.acc.add(adjustedForce);
    }

    constrain(){
        if(this.pos.x - this.radius < 0){
            this.vel.x *= -1;
            this.pos.x = this.radius;
        }
        if(this.pos.x + this.radius > width){
            this.vel.x *= -1;
            this.pos.x = width - this.radius;
        }
        if(this.pos.y - this.radius < 0){
            this.vel.y *= -1;
            this.pos.y = this.radius;
        }
        if(this.pos.y + this.radius > height){
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
    }

    friction(){
        let diff = height - (this.pos.y + this.radius);
        if(diff < 1){
            // F = -1 * mu * N * v^

            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            let normal = this.mass;

            friction.setMag(normal * mu);

            this.applyForce(friction);
        }
    }
}