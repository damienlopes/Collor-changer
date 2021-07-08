
function setup() {
  createCanvas(400,400);

  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background(30);
if (btn_red.mousePressed) {background ("red")}

if (btn_green.mousePressed) {background ("green")}
}

