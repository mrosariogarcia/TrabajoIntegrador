let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let qs = location.search;
let qsOBJ = new URLSearchParams(qs);
let idSerie = qsOBJ.get("id")

let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiK}`

console.log(urlDetalleSerie)

//Fetch para los detalles de series
fetch(urlDetalleSerie)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        
        console.log(data)
        let contenedorDetalleSerie = document.querySelector("#contenedorDetalleSerie")

        contenedorDetalleSerie.innerHTML += `<div>
            <img class="imagenFilm" src="https://image.tmdb.org/t/p/w342${data.poster_path}">
        </div>

        <div class="divDetalles">
            <p class="tituloFilm">${data.original_name}</p>
            <p class="p1">${data.overview}</p>
        </div>

        <div class="divDetalles row">
            <div class="divDetalles box1">
                <article class="calificaciones">
                    <img class="icons popcorn" src="./img/detalles/poch.png">
                    <p class="p1">${data.vote_average}</p>
                </article>
            </div>

            <div class="box2">
                <div class="row1">
                    <p class="p1 p2 subTitulo">Estreno:</p>
                    <p class="p1 p2">${data.first_air_date}</p>
                </div>

                <div class="row1">
                    <p class="p1 p2 subTitulo">Temporadas:</p>
                    <p class="p1 p2">${data.number_of_seasons}</p>
                </div>

                <div class="row1">
                    <p class="p1 p2 subTitulo">Capitluos:</p>
                    <p class="p1 p2">${data.number_of_episodes}</p>
                </div>

            </div>
        </div>

        <nav class="generosPelicula">
            <ul class="abajo" id="generos">
            <li class="corazon"><a href="favorite.html"><img class="botonFav" src="./img/favorite.png"></a></li>
            </ul>
        </nav>`

        let listaGenerosS = document.querySelector('#generos')
        for (let i=0; i < data.genres.length; i++){
            console.log(listaGenerosS)
            console.log(data.genres[i])
            listaGenerosS.innerHTML += `<li class="generoTamano"><a href="detailGenre.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        }

    })
    .catch(function(er){
        console.log(er)
    })


// FAVORITOS

let favoritosS = [] // donde se colectan los favoritos
let botonFav = document.querySelector(".botonFav")

botonFav.addEventListener("click",function(event){

    console.log(this)
    event.preventDefault()

    if (this.src == "../img/favorite.png"){
        favoritosS.push(idSerie)
        botonFav.src = "../img/unfavorite.png"
    }

    else{
        botonFav.src =  "../img/favorite.png"
    }
})