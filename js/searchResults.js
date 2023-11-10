// Buscador

let resultado = location.search;
let resultadoObj = new URLSearchParams(resultado);
let buscado = resultadoObj.get("nombre");

let API_KEY = "5990392eb4d2b299d1f882dd6addfeae"

fetch(`https://api.themoviedb.org/3/search/movie?query=${buscado}&api_key=${API_KEY}`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
})

.catch(function(err){
    console.log(err)
})
