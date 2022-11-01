let fish = [];
let gravity;
let wind;

function setup() {
  createCanvas(600, 600);
  fish.push(new Fish(width/2, height/2, 50));
  gravity = createVector(0, 0.1);
  wind = createVector(0.1, 0);
}

function draw() {  
  background(0, 140, 200);

  fish.forEach(element => {
    element.move();
    element.show();
    element.applyForce(gravity);
    element.constrain();

    if(mouseIsPressed){
      element.applyForce(wind);
    }
  })
}
