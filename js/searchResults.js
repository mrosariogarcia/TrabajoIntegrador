// Buscador

let res = location.search;
let resObj = new URLSearchParams(res);
let buscado = resObj.get("nombre");

const API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

let busquedaMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${buscado}&page=1&include_adult=false`
let busquedaSeries = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${buscado}&page=1&include_adult=false`


let palabraBuscada = document.querySelector("#palabraBuscada");
    palabraBuscada.innerText = buscado;
    
/* Fetch para la busqueda de peliculas */
fetch(busquedaMovies)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        let arrayInfo = data.results
   
        let devolucion= "";
        const pelisEncontradas = document.querySelector(".res_busqueda")
        for (let i=0; i < arrayInfo.length; i++){
            console.log(arrayInfo[i])
            //IMAGEN de pelicula
            // Si no tiene imagen: 
            let foto = ''
            let imagen;
            //Si tiene imagen: 
            if (arrayInfo[i].poster_path != null){
                let foto  = arrayInfo[i].poster_path
                imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            
                //titulo de pelicula
            
            let titulo = arrayInfo[i].title
            
            //id de pelicula
            let id = arrayInfo[i].id

            //release date de pelicula
            let releaseDate = arrayInfo[i].release_date

            //creamos una variable 'devolucion' para guardar todas las opciones de peliculas y luego, poder mostrarlas en el html

            devolucion += `<article id="claseArticle" class="contenedorPelis">
                            <img src="${imagen}" class="sectionarticleimg">
                            <a href="detailMovie.html?id=${id}">
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`

        }

        //pasamos la devolucion a DOM
        pelisEncontradas.innerHTML = devolucion
    })

    .catch(function(e){
        console.log(e)
    })

/* Fetch para la busqueda de series */
fetch(busquedaSeries)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        let arrayInfo = data.results
   
        let devolucion;
        const seriesEncontradas = document.querySelector(".res_busqueda")
        for (let i=0; i < arrayInfo.length; i++){
            console.log(arrayInfo[i])
            //IMAGEN de serie
            // Si no tiene imagen: 
            let foto = ''
            let imagen;
            //Si tiene imagen: 
            if (arrayInfo[i].poster_path != null){
                foto  = arrayInfo[i].poster_path
                imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            
            //titulo de serie
            
            let titulo = arrayInfo[i].name
            
            //id de serie
            let id = arrayInfo[i].id

            //release date de serie
            let releaseDate = arrayInfo[i].first_air_date

            //creamos una variable 'devolucion' para guardar todas las opciones de series y luego, poder mostrarlas en el html

            devolucion += `<article id="claseArticle" class="contenedorPelis">
                            <img src="${imagen}" class="sectionarticleimg">
                            <a href="detailSerie.html?id=${id}">
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`

        }

        //pasamos la devolucion a DOM
        seriesEncontradas.innerHTML = devolucion
    })

    .catch(function(e){
        console.log(e)
    })
