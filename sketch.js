function setup() {
	//check if portrait or landscape
	if(windowWidth>windowHeight){
		createCanvas(1024,768);
	}
	else {
		createCanvas(768,1024);
	}
	frameRate(30);
}


function draw() {
	background('steelblue');
	textSize(32);
	text(width + ' x ' + height,100,100);
}

function windowResized() {
	console.log('windowResized')
	if(windowWidth>windowHeight){
		resizeCanvas(1024,768);
	}
	else {
		resizeCanvas(768,1024);
	}
	
	console.log('width', width, 'height', height);
}
