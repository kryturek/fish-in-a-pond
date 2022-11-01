let fish = [];
let gravity;
let wind;
let mu = 0.15;

function setup() {
  createCanvas(600, 600);
  for(let i=0; i<10; i++){
    fish.push(new Fish(random(width), 300, random(10, 10000)));
  }
  gravity = createVector(0, 1);
  wind = createVector(1, 0);
}

function draw() {  
  background(0, 140, 200);

  fish.forEach(element => {
    let weight = p5.Vector.mult(gravity, element.mass);

    element.move();
    element.show();
    element.applyForce(weight);
    element.constrain();
    element.friction();

    if(mouseIsPressed){
      element.applyForce(wind);
    }
  })
}
