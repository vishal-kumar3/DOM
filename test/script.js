let rectangle = document.getElementsByClassName("rectangle")[0];

rectangle.addEventListener("mousemove", function(event){
    // console.log(rectangle.getBoundingClientRect());
    let red =  0;
    let blue = 0;
    
    let leftSide = rectangle.getBoundingClientRect().x;
    let widthOfRectangle = rectangle.getBoundingClientRect().width;
    let posX = event.x - leftSide;
    
    let percentage = posX/widthOfRectangle * 100;


    red = 255 - (percentage*255)/100;
    blue = (percentage*255)/100
    
    // if(percentage <= 50){
    //     red = 255 - (2*percentage * 255)/100;
    // }
    // else{
    //     blue = percentage * 255 / 100;
    // }

    rectangle.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
    // rectangle.style.transition = "none";
});

rectangle.addEventListener("mouseleave", ()=>{
    // rectangle.style.transition = "background-color 0.3s ease";
    rectangle.style.backgroundColor = "white";
});


// https://pokeapi.co/api/v2/pokemon/ditto