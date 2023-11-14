// Buscador

let res = location.search;
let resObj = new URLSearchParams(res);
let buscado = resObj.get("nombre");

const API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

let busquedaPeliculasSeries = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${nombre}&page=1&include_adult=false`

let respuesta = document.querySelector(".busqueda");
    respuesta.innerText = nombre;
    console.log(respuesta)

/* Fetch para la busqueda de peliculas */
fetch(busquedaPeliculas)

    .then(function(response){
        return response.json()
        console.log(response)
    })

    .then(function(data){
        let arrayInfo = data.results
        console.log(arrayInfo)

        // Lugar para la devolucion
        let lugarDevolucion = document.querySelector(".res_busqueda")
        let devolucion = ""

        // Recorre la API  y saco la informacion que necesito

        for (let i=0; i <=5; i++){
            
                //IMAGEN de pelicula
            // Si no tiene imagen: 
            let foto = ''

            // Si tiene imagen: 
            if (arrayInfo[i].poster_path != null){
                let foto  = arrayInfo[i].poster_path
                let imagen = `https://image.tmdb.org/t/p/w342/${foto}`
            }
            
                //titulo de pelicula
            
            let titulo = arrayInfo[i].title
            
            //id de pelicula
            let id = arrayInfo[i].id

            //release date de pelicula
            let releaseDate = arrayInfo[i].release_date

            //creamos una variable 'devolucion' para guardar todas las opciones de peliculas y luego, poder mostrarlas en el html

            devolucion += `<article class = "res_busqueda">
                            <img src="${imagen}" class="sectionarticleimg">
                            <a href=`detailMovie.html?id=${id}`>
                                <h5>${titulo}</h5>
                            </a>
                            <h6>${releaseDate}</h6>
                        </article>`

        }

        //pasamos la devolucion a DOM
        lugarDevolucion.innerHTML = devolucion
    })

    .catch(function(e){
        return e;
        console.log(e)
    })
