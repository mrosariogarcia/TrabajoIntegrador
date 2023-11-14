let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let generoSel = document.querySelector(".tituloG")

let generoSelP = document.querySelector(".tituloG_series")
let generoSelS = document.querySelector(".tituloG_pelis")

let discoverP = document.querySelector(".discP")    


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiK}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    console.log(data)
    let listaDiscover = data.results
    console.log(listaDiscover)

    let discover = "" // Creamos un espacio para agregar el detalle de genero

    for (i=0; i<listaDiscover.lentgh;i++){
        
        discover += `<article> 
        <img src="https://image.tmdb.org/t/p/w342/${listaDiscover[i].poste_path}">
        <a href="detailMovie.html?id=${listaDiscover[i].id}">
            <h5>${listaDiscover[i].title}</h5>
        </a>
        <h6>${listaDiscover[i].release_date}/h6>
        </article>`
    }

    discoverP.innerHTML = discover

})