let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let res = location.search;
console.log(res)
let resOBJ = new URLSearchParams(res);
let idG = resOBJ.get("id")
console.log(idG)

let nombreGenero = resOBJ.get("nombre")
console.log(nombreGenero)
let span = document.querySelector('#generoAMostrar')
span.innerHTML = nombreGenero

let nombreGeneros = resOBJ.get("name")
console.log(nombreGeneros)
let spans = document.querySelector('#generoAMostrar')
spans.innerHTML = nombreGeneros

let generoSel = document.querySelector(".tituloG")

let generoSelP = document.querySelector(".tituloG_series")
let generoSelS = document.querySelector(".tituloG_pelis")

let discoverP = document.querySelector(".discP")
let discoverS = document.querySelector(".discS")    

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiK}&with_genres=${idG}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    console.log(data)
    let listaDiscover = data.results
    console.log(listaDiscover)

    let discover = "" // Creamos un espacio para agregar el detalle de genero

    for ( let i=0; i<18;i++){
        
        discover += `<article id="claseArticle"> 
        <img src="https://image.tmdb.org/t/p/w342/${listaDiscover[i].poster_path}">
        <a href="./detailMovie.html?id=${listaDiscover[i].id}">
            <h5>${listaDiscover[i].title}</h5>
        </a>
        <h6>${listaDiscover[i].release_date}</h6>
        </article>`
    }

    discoverP.innerHTML = discover

})

.catch(function(e){
    console.log("Error" + e)
})

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiK}&with_genres=${idG}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    console.log(data)
    let listaDiscoverS = data.results
    console.log(listaDiscoverS)

    let discoverTV = "" // Creamos un espacio para agregar el detalle de genero

    for (let i=0; i<18; i++){
        
        discoverTV += `<article id="claseArticle"> 
        <img src="https://image.tmdb.org/t/p/w342/${listaDiscoverS[i].poster_path}">
        <a href="./detailSerie.html?id=${listaDiscoverS[i].id}">
            <h5>${listaDiscoverS[i].name}</h5>
        </a>
        <h6>${listaDiscoverS[i].first_air_date}</h6>
        </article>`
    }

    discoverS.innerHTML = discoverTV

})

.catch(function(e){
    console.log("Error" + e)
})