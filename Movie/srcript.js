let backgroundVideo = document.getElementById("myVideo");
let key = -1;

let videos = {
    0 : "john_wick.webm",
    1 : "theboys.webm",
    2 : "jurasic_world.webm"
}

changeBackground(backgroundVideo);

setInterval(()=>{
    changeBackground(backgroundVideo);
}, 10000);

function changeBackground(backgroundVideo){
    key = (key + 1)%3
    backgroundVideo.load();
    backgroundVideo.children[0].setAttribute("src", `video/${videos[key]}`);
    backgroundVideo.load();
    console.log(backgroundVideo.children[0].getAttribute("src"))
}

// backgroundVideo.children[0].setAttribute("src", newAtt);

// console.log(backgroundVideo.children[0].getAttribute("src"));
