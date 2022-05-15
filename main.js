Webcam.set({
    width:350,
    height:300,
    imageformat:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src=" + data_uri + ">"
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/P0lvd9478/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Has been loaded!");
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, GotResult);
}
function GotResult(error, results){
 if(error)   {
     console.error(error);
 } else{
     console.log(results);
     document.getElementById("result_obj_name").innerHTML= results[0].label;
     document.getElementById("result_obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
 }
}