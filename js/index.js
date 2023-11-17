// Index general

// apis
const API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

let apiPeliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
let apiSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
let apiPeliculasMejorCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

// fetch PELICULAS POPULARES
fetch(apiPeliculasPopulares)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        let arrayPeliculasPopulares = data.results;
        console.log(arrayPeliculasPopulares)

        let peliculasPopulares = document.querySelector("#peliculasPop")
        let peliPop = ""

        for(let i=0; i<5; i++){
            // IMAGEN de pelicula
            // Si no tiene imagen: 
            let foto = ''
            let imagen;
            //Si tiene imagen: 
            if (arrayPeliculasPopulares[i].poster_path != null){
                foto  = arrayPeliculasPopulares[i].poster_path
                imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            //titulo de pelicula
            let titulo = arrayPeliculasPopulares[i].title
            
            //id de pelicula
            let id = arrayPeliculasPopulares[i].id

            //release date de pelicula
            let releaseDate = arrayPeliculasPopulares[i].release_date
            
            peliPop += `<article id="claseArticle" class="contenedorPelis">
                            <img src="${imagen}">
                            <a href="detailMovie.html?id=${id}">
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`
        }
        peliculasPopulares.innerHTML = peliPop
    })
    .catch(function(error){
        console.log(error)
    })

// fetch SERIES POPULARES
fetch(apiSeriesPopulares)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        let arraySeriesPopulares = data.results;
        console.log(arraySeriesPopulares)

        let seriesPopulares = document.querySelector("#seriesPop")
        let seriePop = ""

        for(let i=0; i<5; i++){
            // IMAGEN de serie
            // Si no tiene imagen: 
            let foto = ''
            let imagen;
            //Si tiene imagen: 
            if (arraySeriesPopulares[i].poster_path != null){
                foto  = arraySeriesPopulares[i].poster_path
                imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            //titulo de serie
            let titulo = arraySeriesPopulares[i].name
            
            //id de serie
            let id = arraySeriesPopulares[i].id

            //release date de serie
            let releaseDate = arraySeriesPopulares[i].first_air_date
            
            seriePop += `<article id="claseArticle" class="contenedorPelis">
                            <img src="${imagen}">
                            <a href="detailSerie.html?id=${id}">
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`
        }
        seriesPopulares.innerHTML = seriePop
    })
    .catch(function(error){
        console.log(error)
    })

// fetch PELICULAS MEJOR CALIFICADAS
fetch(apiPeliculasMejorCalificadas)
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        let arrayPeliculasMejorCalificadas = data.results;
        console.log(arrayPeliculasMejorCalificadas)

        let peliculasMejorCalificadas = document.querySelector("#peliculasCalif")
        let peliCalif = ""

        for(let i=0; i<5; i++){
            // IMAGEN de pelicula
            // Si no tiene imagen: 
            let foto = ''
            let imagen;
            //Si tiene imagen: 
            if (arrayPeliculasMejorCalificadas[i].poster_path != null){
                foto  = arrayPeliculasMejorCalificadas[i].poster_path
                imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            //titulo de pelicula
            let titulo = arrayPeliculasMejorCalificadas[i].title
            
            //id de pelicula
            let id = arrayPeliculasMejorCalificadas[i].id

            //release date de pelicula
            let releaseDate = arrayPeliculasMejorCalificadas[i].release_date
            
            peliCalif += `<article id="claseArticle" class="contenedorPelis">
                            <img src="${imagen}">
                            <a href="detailMovie.html?id=${id}">
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`
        }
        peliculasMejorCalificadas.innerHTML = peliCalif
    })
    .catch(function(error){
        console.log(error)
    })