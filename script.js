const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//most popular movie
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
//searched movie
const movieBox = document.querySelector("#movie-box")   

//init call
const getMovies = async(api) => {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    showMovies(data.results)
}

const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(
        (item) => {
            // console.log(item);
            const box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="" />
                <div class="overlay">
                    <div class="title">
                        <h2>${item.original_title}</h2>
                        <span>${item.vote_average}</span>
                    </div>
                    <h3>Overview:</h3>
                    <p>${item.overview}</p>
                </div>
            `;
            movieBox.appendChild(box);
        }
    )
}


document.querySelector(".search").addEventListener("keyup",(event) => {
    if(event.target.value != ""){
        getMovies(SEARCHAPI + event.target.value)
    } else {
        getMovies(APIURL);
    }
})

//init call
    getMovies(APIURL);