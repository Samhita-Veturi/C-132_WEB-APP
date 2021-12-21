Status = "";
Image_1 = "";
function preload(){
    Image_1 = loadImage('IMG_20211214_213906.jpg');
}
function setup(){
    Canvas = createCanvas(700, 500);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Object Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(Image_1, Got_Results);
}
function Got_Results(results, error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(Image_1, 0, 0, 700, 500);
}
function Navigate(){
    window.location = "Home.html";
}