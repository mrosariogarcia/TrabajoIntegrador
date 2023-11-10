// Buscador

let resultado = location.search;
let resultadoObj = new URLSearchParams(resultado);
let buscado = resultadoObj.get("nombre");

let API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

let id_movie = 16418

fetch(`https://api.themoviedb.org/3/search/movie?query=${buscado}&api_key=${API_KEY}`)
.then(function(response){
    return response.json()
})

.then(function(data){
    
    let info = data.results
    for (let i = 0; i<=info.lenght; i++){
        let imagen  = info[i].poster_path
        let foto = 'https://image.tmdb.org/t/p/w500/${imagen}'
    }
    console.log(info)
})

.catch(function(err){
    console.log(err)
})
