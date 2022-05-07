
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_photo(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML= '<img id="picture1" src ="'+data+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UqfWu-uWU/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is Loaded");
}

function check(){
    img=document.getElementById("picture1");
    classifier.classify(img, gotresult);
    
}

function gotresult(error,results){
if (error){
    console.log(error);}
else {
    console.log(results);
    document.getElementById("result_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}