// Buscador

let resultado = location.search;
let resultadoObj = new URLSearchParams(resultado);
let buscado = resultadoObj.get("nombre");

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${5990392eb4d2b299d1f882dd6addfeae}&query=${buscado}`)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
})

.catch(function(err){
    console.log(err)
})