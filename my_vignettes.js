
// ---- Star View ----

//Variables

//Dial click detection
var lt_dial_click = false; //Left top dial - left detection
var lt_dial2_click = false; //Left top dial - right detection
var lb_dial_click = false; //Left bottom dial - left detection
var lb_dial2_click = false; //Left bottom dial - right detection

//Star backdrop
var starposX = 640;
var starposY = 360;

//Planets
var marsX = 180;
var marsY = 300;

//Dials, buttons etc.
var dialX = 200;
var dialY = 125;
var dial2X = dialX;
var dial2Y = dialY+90;

var img;

function setup_vignettes(vignettes){
  vignettes.scale_to_screen(true);
  vignettes.load_image("base2", "png");
  vignettes.load_image("stars", "png");
  vignettes.load_image("dial", "png");
  vignettes.load_image("dial2", "png");
  vignettes.load_image("mars", "png");
}

function setup_scenes(){
  var scene1         = new Scene(scene1_draw);
  scene1.click       = scene1_click;
  scene1.key_pressed = scene1_keypress;

  var scene2         = new Scene(scene2_draw);
  scene2.click       = scene2_click;
  scene2.key_pressed = scene2_keypress;
}



function scene1_draw(){
  vignettes.draw_image("stars", starposX, starposY);
  vignettes.draw_image("mars", marsX, marsY);
  vignettes.draw_image("base2", width/2, height/2);
  img = vignettes.draw_image("dial", dialX, dialY);
  vignettes.draw_image("dial2", dial2X, dial2Y);
  if(marsX > width/2){
    marsX = marsX + .2;
    marsY = marsY -0.02;
  }else{
    marsX = marsX + .2;
    marsY = marsY +0.02;
  }

  if(lt_dial_click == true){
    starposX = starposX -10;
    lt_dial_click = false;
    marsX = marsX -5;
    push();
    translate(dialX,dialY);
    rotate(radians(10));
    pop();

  }else if(lt_dial2_click == true){
    starposX = starposX +10;
    lt_dial2_click = false;
    marsX = marsX +5;

  }else if(lb_dial_click == true){
    starposY = starposY -10;
    lb_dial_click = false;
    marsY = marsY +10;

  }else if(lb_dial2_click == true){
    starposY = starposY +10;
    lb_dial2_click = false;
    marsY = marsY -10;
  }


}

function scene1_click(){
  if(dist(mouseX, mouseY , dialX-30, dialY) <30){
    if(lt_dial_click == false){
      lt_dial_click = true;
    }else{
      lt_dial_click = false;
    }

  }
  if(dist(mouseX, mouseY , dialX+30, dialY) <30){
    if(lt_dial2_click == false){
      lt_dial2_click = true;
    }else{
      lt_dial2_click = false;
    }
  }


  if(dist(mouseX, mouseY , dial2X-30, dial2Y) <30){
    if(lb_dial_click == false){
      lb_dial_click = true;
    }else{
      lb_dial_click = false;
    }

  }
  if(dist(mouseX, mouseY , dial2X+30, dial2Y) <30){
    if(lb_dial2_click == false){
      lb_dial2_click = true;
    }else{
      lb_dial2_click = false;
    }
  }
  }

function scene1_keypress(){
  console.log("scene1 key pressed!");
}



function scene2_draw(){
  background(0,255,0);
  rect(mouseX, mouseY, 100, 100);
}

function scene2_click(){
  console.log("scene2 clicked!");
}

function scene2_keypress(){
  console.log("scene2 key pressed!");
}
