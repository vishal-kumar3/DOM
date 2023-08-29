

var frndOrNot = document.querySelector(".frnd");
var btnAdd = document.querySelector(".btn-add");
// var btnRemove = document.querySelector(".btn-remove");

var connection = false;

// if(!connection){
//     btnRemove.style.display = "none";
// }

btnAdd.addEventListener("click", function(){
    if(connection){
        btnAdd.style.color = "#fff";
        btnAdd.style.backgroundColor = "lightseagreen";
        btnAdd.textContent = "Add Friend";
        frndOrNot.textContent = "Stranger";
        frndOrNot.style.color = "red";
        connection = false;
    }
    else{
        btnAdd.style.color = "black";
        btnAdd.style.backgroundColor = "#dadada";
        btnAdd.textContent = "Remove";
        frndOrNot.textContent = "Friends";
        frndOrNot.style.color = "green";
        connection = true;
    }
})


// btnAdd.addEventListener("click", function(){
//     if(!connection){
//         frndOrNot.textContent = "Friends";
//         frndOrNot.style.color = "Green";
//         btnRemove.style.display = "initial"
//         btnAdd.style.display = "none";
//         connection = true;
//     }
// })

// btnRemove.addEventListener("click", function(){
//     if(connection){
//         frndOrNot.textContent = "Stranger";
//         frndOrNot.style.color = "Red";
//         btnRemove.style.display = "none";
//         btnAdd.style.display = "initial";
//         connection = false;
//     }
// })