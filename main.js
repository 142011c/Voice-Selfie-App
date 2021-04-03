var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;  
if (content=="take my selfie"){
    speak();   
}}

function speak(){
    var human=window.speechSynthesis;

    input="takind your selfie in 5 seconds";
    var Api =new SpeechSynthesisUtterance(input);
    human.speak(Api);
    Webcam.attach("camera");
    setTimeout(function(){
    takesnap();
    save();
    },5000);
    
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,height:350,image_format:'png',png_quality:100
});
function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}
function save(){
    link=document.getElementById("url");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}