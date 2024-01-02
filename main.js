Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
console.log("Setting up of webcam sucessfully completed.");

camera = document.getElementById("camera");
console.log("camera variable created.");

Webcam.attach('#camera');
console.log("Webacam attached sucessfully.");

function take_snapshot()
{
    console.log("Takeing Snapshot");
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
    console.log("Image generated");
    console.log("Placeing Image into id='captured_image'");
    console.log("Checking ml5 version please wait for few milleseconds.")
    console.log("Done!!!")
    console.log("Ml5 version : ",ml5.version);
    console.log("Loading Model")
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/giyghS47S/model.json'
    ,modelLoaded);
    function modelLoaded() {
        console.log("Model Loaded!!!!");
    }

    
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction is-"+prediction_1;
    speak_data_2 = "and second prediction is-"+prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);

}