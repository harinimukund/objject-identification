model_status=false;
obj_array=[]
function preload(){
    dog_cat=loadImage("bed_ppillow.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    object_model=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:object detection started" ;
}
function modelLoaded(){
  
    model_status=true;
    console.log("model loadaed succcesfully");
    object_model.detect(dog_cat, gotResults);
}
function gotResults(e,r){
    if(e){
        console.error(e);
    }
    else{
        console.log(r);
        obj_array=r;
    }
}
function draw(){
    image(dog_cat,0,0,640,420);
    // fill("red");
    // text("Dog",150,50);
    // stroke("red");
    // noFill();
    // rect(36,72,448,366);
    // fill("red");
    // text("Cat",400,69);
    // stroke("red");
    // noFill();
    // rect(380,69,341,353);
    if(model_status !=false){
        for (i= 0;  i< obj_array.length; i++) {
            document.getElementById("status").innerHTML="Status:object detected" ;
            obj_name=obj_array[i].label;
            obj_percentage=floor(obj_array[i].confidence*100);
            fill("red");
            text(obj_name+" "+obj_percentage+"%",obj_array[i].x+15,obj_array[i].y+15);
            stroke("red");
            noFill();
            rect(obj_array[i].x,obj_array[i].y,obj_array[i].width,obj_array[i].height);
        }
    }
}
function back() {
    window.location = "index.html";
}