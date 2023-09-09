let scrollLeft = document.getElementsByClassName("left-arrow")[0];
let scrollRight = document.getElementsByClassName("right-arrow")[0];
let moviescards = document.getElementsByClassName("popular-movies")[0];


// Slider Part to scroll horizontally
scrollLeft.addEventListener("click", ()=>{
    moviescards.scrollBy(-500, 0);
});

scrollRight.addEventListener("click", ()=>{
    moviescards.scrollBy(500, 0);
});

// let card = document.getElementsByClassName("movie-card")[0];
let json_url = "../Movie/movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    data.forEach((element,i) => {
        let {name, imdb, date, sposter, bposter, genre, url} = element;

        // card ke liye
        let card = document.createElement('a');
        card.href = `${url}`;
        card.classList.add('movie-card');

        // data/elemet ko structure kr rhe fetch krne ke liye  
        card.innerHTML = `<img src="../Movie/${sposter}" alt="">
                          <div class="hvr">
                              <img src="../Movie/${bposter}" alt="">
                              <div class="cont">
                                  <h3>${name}</h3>
                                  <div class="sub">
                                      <p>${genre}, ${date}</p>
                                      <p><span style="background: yellow; color: #000; padding: 1px;">IMDB</span> <i class="ri-star-s-fill"></i> ${imdb}</p>
                                  </div>
                              </div>
                          </div>`;

        // now vo fetch kiya hua data ko update kr rhe website pe
        moviescards.appendChild(card);

        // Search
        // Yaha se search walla part h
        // pehle search me sara data load krna h

        let searchResult = document.getElementById("search");

        let resultCard = document.createElement('a');
        resultCard.href = `${url}`;
        resultCard.classList.add("search-result");

        resultCard.innerHTML = `<img src="../Movie/${sposter}" alt="${name}">
            <div class="cont">
                <p class="title">${name}</p>
                <p class="disc">${genre}, ${date} <span>IMDB</span> <i class="ri-star-fill"></i> ${imdb}</p>
            </div>`;

        searchResult.appendChild(resultCard);

    });
});


// ab Search Filter Thing
let input = document.getElementById("searchInput");
let searchResult = document.getElementById("search");

input.addEventListener("keyup", ()=>{
    console.log(input.value.toUpperCase());
    let filter = input.value.toUpperCase();
    let a_array = searchResult.getElementsByTagName('a');

    for(let index = 0; index<a_array.length; index++){
        let movieTitle = a_array[index].getElementsByClassName("cont")[0];
        let textValue = movieTitle.textContent || movieTitle.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            a_array[index].style.display = "flex";
            searchResult.style.visibility = "visible";
            searchResult.style.opacity = "1";
        }
        else{
            a_array[index].style.display = "none";
        }
        if(filter.length == 0){
            console.log("yup");
            searchResult.style.visibility = "hidden";
            searchResult.style.opacity = "0";
        }
    }
});

let middle = document.getElementsByClassName("middle")[0];
let duration = ['155000', '171000', '65000'];
let video = document.getElementById("myVideo");


// fetch(json_url).then(Response => Response.json())
// .then((data)=>{
//     setInterval(()=>{
//         for(let index=0; index<3; index++){
//             setTimeout(()=>{
//                 let {name, genre, date, imdb, low} = data[index];
        
//                 let title = middle.getElementsByClassName('title')[0];
//                 let disc2 = middle.getElementsByClassName('disc2')[0];
//                 // video.src = `http://127.0.0.1:5500/Movie/${url}`;
//                 console.log(low);
//                 title.textContent = `${name}`;
//                 disc2.innerHTML = `The Netflix Original <span style="color: greenyellow;">${genre}</span> ${date} <span style="background-color: yellow; color: #000; padding: 0px 2px;">IMDB</span> <i class="ri-star-s-fill"></i> ${imdb}`;
//             }, duration[index]);
//         }
//     }, duration[0] + duration[1] + duration[2]);
// })



function filterType(type = "series"){
    console.log("series");
    moviescards.innerHTML = '';

    fetch(json_url).then(Response => Response.json())
    .then((data)=>{
        let type_array = data.filter(element =>{
            return element.type === `${type}`;
        });

        type_array.forEach(element =>{
            let {name, imdb, date, sposter, bposter, genre, url} = element;

            // card ke liye
            let card = document.createElement('a');
            card.href = `${url}`;
            card.classList.add('movie-card');

            // data/elemet ko structure kr rhe fetch krne ke liye  
            card.innerHTML = `<img src="../Movie/${sposter}" alt="">
                              <div class="hvr">
                                  <img src="../Movie/${bposter}" alt="">
                                  <div class="cont">
                                      <h3>${name}</h3>
                                      <div class="sub">
                                          <p>${genre}, ${date}</p>
                                          <p><span style="background: yellow; color: #000; padding: 1px;">IMDB</span> <i class="ri-star-s-fill"></i> ${imdb}</p>
                                      </div>
                                  </div>
                              </div>`;

            // now vo fetch kiya hua data ko update kr rhe website pe
            moviescards.appendChild(card);
        });
    });
}



function home(){
    console.log("home");
}