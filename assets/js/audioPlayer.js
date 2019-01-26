var audio=document.getElementById("audio");
var bar=document.getElementById('progress');
var play_Pause=document.getElementById("playPause");
var stopBtn=document.getElementById("stop");
var volumeBtn=document.getElementById("volume");
var seekBar=document.getElementById("seekSlider");
var volumeBar=document.getElementById("volumeSlider");
var seeking;
seekBar.setAttribute("max",audio.duration);
seekBar.onchange=function(){
    audio.currentTime=seekBar.value;
};
audio.ontimeupdate=function(){
    seekBar.value=audio.currentTime;
};

// Listeners
play_Pause.addEventListener("click",playPause);
stopBtn.addEventListener("click",stop);
volumeBtn.addEventListener("click",volume);

volumeBar.addEventListener("mousemove",setVolume);




// Functions
function playPause()
{
    if(audio.paused)
    {
        audio.play();
        play_Pause.classList.remove("fa-play-circle");
        play_Pause.classList.add("fa-pause-circle");


    }else
    {
        audio.pause();
        play_Pause.classList.remove("fa-pause-circle");
        play_Pause.classList.add("fa-play-circle");
    }
    
}

// /////////////////////////////////////////////////
function stop()
{
  audio.pause();
  audio.currentTime=0;
  play_Pause.classList.remove("fa-pause-circle");
        play_Pause.classList.add("fa-play-circle");

}
//////////////////////////////////

function volume()
{
    if(audio.muted)
    {
        audio.muted=false;
        volumeBar.classList.add("d-inline");
        volumeBtn.classList.remove("fa-volume-off");
        volumeBtn.classList.add("fa-volume-up");
       
    }else
    {
        audio.muted=true;
        volumeBar.classList.add("d-none");
        volumeBtn.classList.remove("fa-volume-up");
        volumeBtn.classList.add("fa-volume-off");
       
    }
}

/////////////////////////////////////////////////////
function setVolume()
{
    audio.volume=volumeBar.value/100;
}
/////////////
