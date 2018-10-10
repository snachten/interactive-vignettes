
// ---- Star View ----

//Variables

//Dial click detection
var lt_dial_click = false;
var lt_dial2_click = false;
var lb_dial_click = false;
var lb_dial2_click = false;

//Star backdrop
var starposX = 640;
var starposY = 360;

//Planets
var marsX = -100;
var marsY = 300;

//Dials, buttons etc.
var dialX = 200;
var dialY = 125;
var dial2X = dialX;
var dial2Y = dialY+90;



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
  vignettes.draw_image("dial", dialX, dialY);
  vignettes.draw_image("dial2", dial2X, dial2Y);
  if(marsX > width/2){
    marsX = marsX + 1;
    marsY = marsY -0.02;
  }else{
    marsX = marsX + 1;
    marsY = marsY +0.02;
  }

  if(lt_dial_click == true){
    starposX = starposX -20;
    lt_dial_click = false;

  }
  if(lt_dial2_click == true){
    starposX = starposX +20;
    lt_dial2_click = false;

  }
  if(lb_dial_click == true){
    starposY = starposY -20;
    lb_dial_click = false;

  }
  if(lb_dial2_click == true){
    starposY = starposY +20;
    lb_dial2_click = false;

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
