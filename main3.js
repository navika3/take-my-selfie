var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox");
camera=document.getElementById("camera");
Webcam.set({
    width:360,height:250,image_format:"jpeg",jpeg_quality:90

});
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+' ">';

    });
}

function start(){
    textbox.innerHTML="";
    recognition.start();

    
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    textbox.innerHTML=content;
    console.log(content);
    if (content=="take my selfie"){
        console.log("TAKING SELFIE IN 5 SECONDS");
      speak();
    }
    }
function speak(){
    var synth=window.speechSynthesis;
    speak_data="TAKING YOUR SELFIE IN 5 SECONDS";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();

    },5000);
    
    

    

}