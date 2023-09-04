var elem = document.querySelectorAll(".elem");
// var img = document.querySelector("img");

elem.forEach(function(element) {

    element.childNodes[1].addEventListener("mousemove", function(dest){
        // img.style.transform = "scale(1)";
        var rect = element.getBoundingClientRect(); // to get position of parent element

        console.log("parent Element position:- ", rect.top);
        console.log("cursor position:- ", dest.y);

        element.childNodes[3].style.left = dest.x + "px";
        element.childNodes[3].style.top = (dest.y - rect.top) + "px";
        // img.style.transform = "scale(0)";
    });
    
    element.childNodes[1].addEventListener("mouseenter", function(){
        element.childNodes[3].style.opacity = "1";
    })
    
    element.childNodes[1].addEventListener("mouseleave", function(){
        element.childNodes[3].style.opacity = "0";
    })
});

