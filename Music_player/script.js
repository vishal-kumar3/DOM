var progress = document.getElementById("progress")
var song = document.getElementById("song")
var ctrIcon = document.getElementById("controller")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = 0;
}

progress.addEventListener("change", function(){
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.remove("ri-play-fill");
    ctrIcon.classList.add("ri-pause-line");
});
 
function playPause(){
    if(ctrIcon.classList.contains("ri-pause-line")){
        song.pause();
        ctrIcon.classList.remove("ri-pause-line");
        ctrIcon.classList.add("ri-play-fill");
    }
    else{
        song.play();
        ctrIcon.classList.remove("ri-play-fill");
        ctrIcon.classList.add("ri-pause-line");
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
}); 