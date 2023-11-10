// Buscador

let resultado = location.search;
let resultadoObj = new URLSearchParams(resultado);
let buscado = resultadoObj.get("nombre");

const API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

fetch(`https://api.themoviedb.org/3/search/movie?query=${buscado}&api_key=${API_KEY}`)
.then(function(response){
    return response.json()
})

.then(function(data){
    
    let info = data.results

    for (let i=0; i<=info.length; i++){
        
        //imagen de pelicula
        let foto  = info[i].poster_path
        let imagen = `https://image.tmdb.org/t/p/w342/${foto}`
        
        //titulo de pelicula
        let titulo = info[i].title
        
        //id de pelicula
        let id = info[i].id

        //release date de pelicula
        let releaseDate = info[1].release_date

        //tendria que ir un if por si la "linea" no tiene imagen

        //creamos una variable 'devolucion' para guardar todas las opciones de peliculas y luego, poder mostrarlas en el html
        let devolucion = ""

        devolucion += `<article>
                        <img src="${imagen}">
                        <a href="detailSerie.html?id=${id}">
                            <h5>${titulo}</h5>
                        </a>
                        <h6>${releaseDate}</h6>
                    </article>`

    }
    
    //pasamos la devolucion a DOM
    
})

.catch(function(err){
    console.log(err)
})
