 //Variablen deklarieren (globale Variablen)
function preload(){
  bild = loadImage("Pema.jpg");
}
let r;
let pacX;
let pacY;
let richtung;
let aktWinkel //halbe grösse des Mundes
let x;

function setup(){
createCanvas(400,300)
  
  //Variablen initialisieren
  
  r =60;
  pacX =r;
  pacY= height/2;
  richtung = 5;
  aktWinkelEinstellen= 12;
 aktWinkel= PI/aktWinkelEinstellen;
  let x = 1
  
  
}
function draw(){
  //framerate(2)//Stadartwert ist 60
  background(245);
  noCursor();
  
  image(bild,0,0,400,300);


//Variablen anwenden (Pacman zeichnen)
//Variable anwenen (Pacman mit Auge Zeichnen)
  frameRate(60); //Standardwert ist 60 fps
  translate(pacX, pacY);
  stroke(30);
  strokeWeight(r/30);
  fill(255, 215, 15);
  if(richtung > 0){
  
  arc(0, 0, 2*r, 2*r, 0+aktWinkel, TWO_PI-aktWinkel, PIE);
  strokeWeight(r/6);
  point(r*0.4, -r*0.5);
  } else {
    arc(0, 0, 2*r, 2*r, PI+aktWinkel, PI-aktWinkel, PIE);
    strokeWeight(r/6);
    point(-r*0.4, -r*0.5);
  }
  
  //Variablen verändern (Bewegung)
  pacX = pacX + richtung;
  if(pacX > width-r || pacX < r){
    richtung = richtung * -1;
    //richtung = -richtung
  }
  
}