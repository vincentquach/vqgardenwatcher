var one, two, three, four, five, six;
var screen1, screen2, screen3, screen4, screen5;
var stage;

function preload() {
  screen1 = loadImage('assets/mainMenu.png');
  screen2 = loadImage('assets/camera.png');
  screen3 = loadImage('assets/plantInfo.png');
  screen4 = loadImage('assets/remindMe.png');
  screen5 = loadImage('assets/finalPage.png');

}

function setup() {
  createCanvas(375,812);
  image(screen1,0,0);
  stage = 1;
}

function draw() {
  if (stage == 1) {
     one();
    } else if (stage == 2) {
        two();
    } else if (stage == 3) {
        three();
    } else if (stage == 4) {
        four();
    } else if (stage == 5) {
        five();
    } else if (stage == 6) {
        six();
    }

    function one() {
      if(mouseY > 750 && mouseIsPressed){
        stage = 2;
      }
    }

    function two() {
      image(screen2,0,0);
      if(mouseX > 150 && mouseX < 220 && mouseY > 380 && mouseY < 430 && mouseIsPressed){
        stage = 3;
      }
    }

    function three() {
      image(screen3,0,0);
      if(mouseX > 300 && mouseX < 330 && mouseY > 380 && mouseY < 430 && mouseIsPressed){
        stage = 4;
      }
    }

    function four() {
      image(screen4,0,0);
      if(mouseY > 750 && mouseIsPressed){
        stage = 5;
      }
    }

    function five() {
      image(screen1,0,0);
      if(mouseX > 230 && mouseX < 330 && mouseY > 380 && mouseY < 480 && mouseIsPressed){
        stage = 6;
      }
    }

    function six() {
      image(screen5,0,0);
    }
}
