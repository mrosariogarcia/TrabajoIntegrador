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
        // ahora si hacemos codigo
        // busco los elementos que necesito en la api

        console.log(data)
        
        // let fotoPortada = document.querySelector('#portadaPelicula');
        // let titulo = document.querySelector('#tituloFilm');
        // let calificacion = document.querySelector('#calificacion');
        // let fechaEstreno = document.querySelector('#fechaEstreno');
        // let duracion = document.querySelector('#duracion');
        // let sinopsis = document.querySelector('#sinopsis');
        // let generos = document.querySelector('#genero');

        let contenedorDetallePeli = document.querySelector('#contenedorDetallePelicula');
        let generos = document.querySelector("#generos")

        for (let i = 0; i < data.genres.length; i++){
            generos.innerHTML += `<li class="generoTamano"><a href="detailGenre.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        }
        // generos.innerHTML += `| <a href='sinopsisGenero.html?id=${data.genres[i].id}&name=${data.genres[i].name}'>
        // ${data.genres[i].name}
        // | </a>  `

        contenedorDetallePeli.innerHTML += `<div><img class="imagenFilm" src="https://image.tmdb.org/t/p/w342${data.poster_path}"></div>

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
                                                <ul class="abajo" id="generos"></ul>
                                            </nav>`
        for (let i = 0; i < data.genres.length; i++){
            generos.innerHTML += `<li class="generoTamano"><a href="detailGenre.html?id=${data.genres[i].id}&name=${data.genres[i].name}">${data.genres[i].name}</a></li>`
        }
        // Preparo estructura
    //     let listaG = ''
    //     generosPelicula = data.genres
    //     for (let i = 0; i < generosPelicula.length; i++) {
    //         listaG += `<li class="generoTamano" id="${generosPelicula[i].id}"><a href="https://api.themoviedb.org/3/genre/movie/list?api_key=${apiK}">${generosPelicula[i].name}</a></li>`
    //     // listaGeneros += `<a href="./detalle_genero.html?id_genero=${generosPelicula[i].id}" id="${generosPelicula[i].id}">${generosPelicula[i].name}</a> `
    // }
    //     // // lo remplazo en el html
    //     // // FALTAN CALIFICACION Y GENEROS
    //     fotoPortada.innerHTML = `<img src="https://image.tmdb.org/t/p/w342${data.poster_path}">`
    //     titulo.innerHTML = `${data.title}`
    //     fechaEstreno.innerHTML = `${data.release_date}`
    //     duracion.innerHTML = `${data.runtime}`
    //     sinopsis.innerHTML = `${data.overview}`
    //     calificacion = `${data.vote_average}`
    //     console.log(calificacion)
    //     generos = `${listaG}`
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
        console.log(peliculasRecomendadas)


    })