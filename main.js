function preload(){
}
function setup(){
canvas=creatCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
}
function draw(){

}
function take_snapshot(){
    save('my_image.png');

}