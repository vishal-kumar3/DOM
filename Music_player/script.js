var progress = document.getElementById("progress")
var song = document.getElementById("song")
var ctrIcon = document.getElementById("controller")
var timeCurrent = document.getElementById("timeCurrent")
var timeEnd = document.getElementById("timeEnd")

var title = document.getElementById('title');
var artist = document.getElementById('artist');
var poster = document.getElementById('poster');
var currentSong = 0;

const numberOfSongs = 4;

var music = {
    0 : {
        'id' : '1', 
        'title': 'On My Way',
        'artist': 'Alan Walker'
    },
    1 : {
       'id' : '2',
        'title': 'Faded',
        'artist': 'Alan Walker'
    },
    2 : {
        'id' : '3',
        'title': 'On And On',
        'artist': 'Stephen Bishop'
    },
    3 : {
        'id' : '4',
        'title': 'konsa to gana h',
        'artist': 'pta nhi'
    }
}

function pause(){
    song.pause();
    ctrIcon.classList.remove("ri-pause-line");
    ctrIcon.classList.add("ri-play-fill");
}

function play(){
    song.play();
    ctrIcon.classList.remove("ri-play-fill");
    ctrIcon.classList.add("ri-pause-line");
}

function songChange(currentSong){
    title.textContent = music[currentSong]['title'];
    artist.textContent = music[currentSong]['artist'];
    let newSongSource = '../Spotify/audio/' + music[currentSong]['id'] + '.mp3';
    let newSongPoster = '../Spotify/img/' + music[currentSong]['id'] + '.jpg';
    song.setAttribute('src', newSongSource);
    poster.setAttribute('src', newSongPoster);
}

function next(){
    currentSong = Math.floor((currentSong+1)%numberOfSongs);
    songChange(currentSong);
    play();
}

function back(){
    currentSong--;
    if(currentSong<0){
        currentSong = numberOfSongs + currentSong;
    }
    currentSong = Math.floor((currentSong)%numberOfSongs);
    songChange(currentSong);
    play();
}

setInterval(()=>{
    if(timeCurrent.textContent === timeEnd.textContent){
        next();
    }
}, 1000);



song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = 0;
    var minutes = Math.floor(song.duration/60);
    var seconds = Math.round(song.duration%60);

    if(seconds < 10){
        seconds = `0${seconds}`
    }

    timeEnd.textContent = `${minutes}:${seconds}`;
}


progress.addEventListener("input", function(){
    play();
    song.currentTime = progress.value;
});
 
function playPause(){
    if(ctrIcon.classList.contains("ri-pause-line")){
        pause();
    }
    else{
        play();
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
    let minutes = Math.floor(song.currentTime/60);
    let seconds = Math.round(song.currentTime%60);    
    
    if(seconds < 10){
        seconds = `0${seconds}`
    }

    timeCurrent.textContent = `${minutes}:${seconds}`;
}); 