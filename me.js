const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box");

let latest = async (api) => {
    let rawFetchData = await fetch(api);
    let fetchData = await rawFetchData.json();
    search(fetchData.results)
}

let search = async (data) => {
    let moiveBox = document.querySelector('.movieBox');
    moiveBox.innerHTML = "";
    for (let d of data) {
        let box = document.createElement('div')
        box.classList.add('box');
        box.innerHTML = `
       <img src="${IMGPATH + d.poster_path} " alt="image is missing" width="100% ">
              <div class="overlay">
                  <h2>${d.original_title}</h2>
                 <p>${d.overview}</p>
        </div>
     `
        moiveBox.appendChild(box)
    }
}
var input = document.querySelector('#search');
input.addEventListener(
    'keyup',
    (e) => {
        if (e.target.value != "") {
            latest(SEARCHAPI + e.target.value);
        } else {
            latest(APIURL)
        }
    }
)

latest(APIURL);
