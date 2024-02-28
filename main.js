status = "";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(380, 380);
    video.hide
}

function start() {
    o_d = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : object detected";
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {
    image(video,0,0,380,380)
}