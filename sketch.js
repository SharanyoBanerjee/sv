var decline, declineImg;
var homebut, homebutImg;
var join, joinImg;
var info, infoImg;
var scr1, scr1Img;
var scr2, scr2Img;
var thank, thankImg;
var startmet, startmetImg;
var infobut, infobutImg;
var alert1, alertImg;
var screen = 0;
function preload() {
  declineImg = loadImage("images/decline.png");
  homebutImg = loadImage("images/home.png");
  infoImg = loadImage("images/info.png");
  infobutImg = loadImage("images/infobut.png");
  joinImg = loadImage("images/Join1.png");
  scr1Img = loadImage("images/scr1.png");
  scr2Img = loadImage("images/scr2.png");
  startmetImg = loadImage("images/startmet.png");
  thankImg = loadImage("images/thank.png");
  alertImg = loadImage("images/alert.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  startmet = createSprite((1 / 2) * windowWidth, windowHeight - 550, 300, 50);
  startmet.addImage(startmetImg);
  startmet.scale = 1;

  join = createSprite((1 / 2) * windowWidth, windowHeight - 350, 300, 100);
  join.addImage(joinImg);
  join.scale = 0.4;

  scr1 = createSprite((1 / 2) * windowWidth, windowHeight - 350, 400, 450);
  scr1.addImage(scr1Img);

  decline = createSprite((1 / 2) * windowWidth, windowHeight - 150, 50, 50);
  decline.addImage(declineImg);

  infobut = createSprite((4 / 7) * windowWidth, windowHeight - 155, 20, 50);
  infobut.addImage(infobutImg);

  info = createSprite((4 / 7) * windowWidth, windowHeight - 250, 20, 50);
  info.addImage(infoImg);

  scr2 = createSprite((1 / 2) * windowWidth, windowHeight - 400, 400, 450);
  scr2.addImage(scr2Img);
  scr2.scale = 0.85;
  scr2.visible = false;

  thank = createSprite((1 / 2) * windowWidth, windowHeight - 580, 20, 20);
  thank.addImage(thankImg);

  homebut = createSprite((1 / 2) * windowWidth, windowHeight - 250, 300, 100);
  homebut.addImage(homebutImg);
  homebut.scale = 0.8;

  //box1();

  //alert1 = createSprite((3/4)*windowWidth,windowHeight-)
}
function draw() {
  background("white");

  if (screen === 0) {
    scr1.visible = false;
    decline.visible = false;
    infobut.visible = false;
    info.visible = false;
    scr2.visible = false;
    thank.visible = false;
    homebut.visible = false;
    startmet.visible = true;
    join.visible = true;
    //alert1.visible = false;
    if (mousePressedOver(startmet)) {
      screen = 1;
    }
    if (mousePressedOver(join)) {
      screen = 2;
    }
  }
  if (screen === 1) {
    startmet.visible = false;
    join.visible = false;
    scr1.visible = true;
    decline.visible = true;
    infobut.visible = true;
    thank.visible = false;
    homebut.visible = false;
    //alert1.visible = false;
    if (mousePressedOver(infobut)) {
      info.visible = true;
    }
    if (mousePressedOver(decline)) {
      screen = 3;
    }
    if (mousePressedOver(info)) {
      info.visible = false;
    }
  }
  if (screen === 2) {
    if (mousePressedOver(infobut)) {
      info.visible = true;
    }
    decline.visible = true;
    infobut.visible = true;
    scr2.visible = true;
    //alert1.visible = true;
    thank.visible = false;
    homebut.visible = false;
    //scr2.depth = info.depth;

    console.log(scr2.depth);
    console.log(info.depth);
    scr2.depth = info.depth;
    info.depth = info.depth + 1;

    console.log("after" + scr2.depth);
    console.log("after" + info.depth);

    if (mousePressedOver(decline)) {
      screen = 3;
    }
    if (mousePressedOver(info)) {
      info.visible = false;
    }

    //box1();

    setTimeout(box1, 5000);
    if (mousePressedOver(alert1)) {
      alert1.destroy();
    }
  }
  if (screen === 3) {
    startmet.visible = false;
    join.visible = false;
    decline.visible = false;
    infobut.visible = false;
    scr2.visible = false;
    scr1.visible = false;
    thank.visible = true;
    homebut.visible = true;
    info.visible = false;
    //alert1.visible = false;

    if (mousePressedOver(homebut)) {
      scr2.visible = false;
      reset();
    }
  }

  drawSprites();
}
function reset() {
  screen = 0;
  scr1.visible = false;
  //scr2.visible = false;
  startmet.visible = true;
  join.visible = true;
}
function box1() {
  alert1 = createSprite((1 / 2) * windowWidth, windowHeight - 500, 20, 50);
  alert1.addImage(alertImg);
  alert1.scale = 0.2;
}

function alert2() {}
