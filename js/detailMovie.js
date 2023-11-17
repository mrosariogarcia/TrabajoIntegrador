let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let qs = location.search;
let qsOBJ = new URLSearchParams(qs);
let idPelicula = qsOBJ.get("id")

let urlDetallePelicula = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiK}`
let urlRecomendations = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${apiK}`

console.log(urlDetallePelicula)

//Fetch para los detalles de peliculas
fetch(urlDetallePelicula)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
        console.log(data.genres)
        
        let contenedorDetallePeli = document.querySelector('#contenedorDetallePelicula');
        

        // for (let i = 0; i < data.genres.length; i++){
        //     generos.innerHTML += `<li class="generoTamano"><a href="detailGenre.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        // }

        contenedorDetallePeli.innerHTML += `<div>
            <img class="imagenFilm" src="https://image.tmdb.org/t/p/w342${data.poster_path}">
        </div>

        <div class="divDetalles">
            <p class="tituloFilm">${data.title}</p>
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
                    <p class="p1 p2">${data.release_date}</p>
                </div>

                <div class="row1">
                    <p class="p1 p2 subTitulo">Duración:</p>
                    <p class="p1 p2">${data.runtime}</p>
                </div>
            </div>
        </div>

        <nav class="generosPelicula">
            <ul class="abajo" id="generos">
            </ul>
            <button id="recomendaciones" type="submit">Ver recomendaciones</button>
        </nav>
        <div id="recomendaciones">
        </div>`

        let listaGeneros = document.querySelector('#generos')
        for (let i=0; i < data.genres.length; i++){
            listaGeneros.innerHTML += `<li class="generoTamano"><a href="detailGenre.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        }
    })
    .catch(function(er){
        console.log(er)
    })


//Fetch para los detalles de peliculas
recomendacion.addEventListener("click", function(){
    fetch(urlRecomendations)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //arrancamos con el codigo
        let peliculasRecomendadas = data.results;
        console.log(peliculasRecomendadas);

        let verRecomendaciones = document.querySelector('#verRecomendaciones');
                
        for (let i = 0; i < 5; i++){
            verRecomendaciones.innerHTML += `<article id="claseArticle" class="contenedorPelis">
            <img src="${peliculasRecomendadas[i].poster_path}">
            <a href="detailMovie.html?id=${peliculasRecomendadas[i].id}">
                <h5>${peliculasRecomendadas[i].title}</h5>
            </a>
            <h6>${peliculasRecomendadas[i].release_date}</h6>
            </article>`
        }

    })
    .catch(function (error) {
        console.log(error);
    })
})
