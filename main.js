difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    createCapture = createCapture(VIDEO);
    video.size(550, 150);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.onpose('pose', gotPoses);
}

function draw(){
    background('#6C91C2');
}

function modelLoaded(){
    console.log("Posenet Is Initialized!");
}

function gotPoses(results){
    if(results > 0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =  floor(leftWristX - rightWristX)
    }
}