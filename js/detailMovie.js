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
        
        console.log(data.genres);
        console.log(data)
        
        let contenedorDetallePeli = document.querySelector('#contenedorDetallePelicula');
        
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

            <div id="videoTrailer">
                <div id="videoTrailer"></div>
                <a id="linkVideo"></a>
                <div id="masVideos">Mas videos y trailers</div>
            </div>

        </div>

        <nav class="generosPelicula">
            <div>
            <ul class="abajo" id="generos"></ul>
            </div>
            <div>
            <h4 class="recomendaciones">Ver recomendaciones</h4>
            <section id="verRecomendaciones" class="contenedorPelisDetalles"></section>
            </div>
        </nav>`

        // <div class="foto_trailer">
        //                             <img src="${urlImagen + data.poster_path}" width="300px" height ='520px'>
        //                             <div class = "Trailer"></div>
        //                             <div class="otrosVideos"><p>Todos los videos y trailers</p></div>

        let listaGeneros = document.querySelector('#generos')
        for (let i=0; i < data.genres.length; i++){
            listaGeneros.innerHTML += `<li class="generoTamano"><a href="detailGenres.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        }
    })
    .catch(function(er){
        console.log(er)
    })


//Fetch para los detalles de peliculas
fetch(urlRecomendations)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //arrancamos con el codigo
        let peliculasRecomendadas = data.results;
        console.log(peliculasRecomendadas);

        let verRecomendaciones = document.querySelector('#verRecomendaciones');
                
        for (let i = 0; i < 3; i++){
            verRecomendaciones.innerHTML += `
            <article id="claseArticle">
            <img src="https://image.tmdb.org/t/p/w342${peliculasRecomendadas[i].poster_path}">
            <a href="detailMovie.html?id=${peliculasRecomendadas[i].id}">
                <h5>${peliculasRecomendadas[i].title}</h5>
            </a>
            <h6>${peliculasRecomendadas[i].release_date}</h6>
            </article>`
        }
        console.log(verRecomendaciones)

    })
    .catch(function (error) {
        console.log(error);
    })

// trailer
let urlTrailer = `https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=f216cd46b728d209895b1387e51e9182&language=en-US`
fetch(urlTrailer)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        todosVideos = data.results;
        console.log(todosVideos);

        let trailer = document.querySelector("#videoTrailer");
        let linkVideo = document.querySelector('#linkAVideo');
        let masVideos = document.querySelector('#masVideos');

        for (let i=0; i<todosVideos.length; i++){
            if(todosVideos[i].type == "Trailer"){
                let vid = todosVideos[i]
                trailer.innerHTML = `Trailer: ${vid.name}`
                linkVideo.innerHTML += `<a src="https://www.youtube.com/embed/${vid[i].key}">Ver en YouTube</a>`
                break
            }
            else{
                trailer.innerHTML = `No hay trailers disponibles. Video Recomendado: ${todosVideos[0].name}`
                linkVideo.innerHTML = `<h5 href="https://www.youtube.com/embed/${todosVideos[0].name}">Ver en YouTube</h5>`
            }
        }
        
        let listaVideos = ``
        if (todosVideos.length > 2) {
            for (let i = 0; i < todosVideos.length; i++){
                listaVideos += `<a href="https://www.youtube.com/embed/${todosVideos[i].key}">${todosVideos[i].name}</a>`
            }
            masVideos.innerHTML = listaVideos  
        }
        else{
            masVideos.innerHTML = `<h5>No hay videos adicionales disponibles.</h5>`
            }
    })
    .catch(function(er){
        console.log(er)
    })