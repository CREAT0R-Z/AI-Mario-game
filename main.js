function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
    mario_kick = loadSound("kick.wav");
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameconsole");
	posenet = ml5.poseNet(video, modelloaded);
	posenet.on("pose", gotresults);
  
}

function draw() {
	game()
}

function modelloaded(){
	console.log("Model is loaded");
  }
   
  function gotresults(results){
	// console.log(results);
	if(results.length > 0 ){
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	}
  }

  




