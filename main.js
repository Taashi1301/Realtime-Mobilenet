function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, Getresults);
}

function modelLoaded(){
    console.log("Model Has been Loaded");
}

function Getresults(error, results){
    if (error){
        console.log(error);
    }
    if (results){
        console.log(results);
        object = results[0].label;
        accuracy = results[0].confidence.toFixed(3)*100;
        document.getElementById("result_object_name").innerHTML=object;
        document.getElementById("result_object_accuracy").innerHTML=accuracy + " %";
    }
}