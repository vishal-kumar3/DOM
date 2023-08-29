
var post = document.querySelector(".post");
var love = document.querySelector(".popUp");
var like = document.querySelector(".love");
var fillLike = document.querySelector(".fill-love");

like.addEventListener("click", function(){
    fillLike.style.display = "initial";
    like.style.display = "none";
});

fillLike.addEventListener("click", function(){
    fillLike.style.display = "none";
    like.style.display = "initial";
})

// post.style.backgroundColor = "red";

// love.style.opacity = "1";

post.addEventListener("dblclick", function(){
    console.log("run hua!!");
    // love.style.color = "red";
    love.style.transform = "translate(-50%, -50%) scale(1.5)";
    love.style.opacity = "0.8";

    setTimeout(function(){
        love.style.opacity = "0";
    },600)
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    },900)
})


setTimeout 