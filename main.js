mouth_x = 0;
mouth_y = 0;
var lips;

function preload(){

    lips = loadImage("https://i.postimg.cc/2jP2Lmmn/R.png");
}
function setup(){
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}


function gotPoses(results){
  
    if(results.length > 0)
    {
        console.log(results);
         mouth_x = results[0].pose.nose.x-12;
        mouth_y = results[0].pose.nose.y+10;
        console.log("mouth x = "+ mouth_x);
        console.log("mouth y = "+ mouth_y);
    
    }

}
    


function draw(){
image(video, 0, 0, 300, 300);
image(lips,mouth_x,mouth_y,30 ,20);
}

function take_snapshot(){
    save("my_filtered_image.png");
}

