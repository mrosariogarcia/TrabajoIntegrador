let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let res = location.search;
let resObj = new URLSearchParams(res);

let idP = resObj.get('id_genero_pelis')
let idS = resObj.get('id_genero_series')


//Generos PELICULAS

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiK}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    let listaG = data.genres
    console.log(listaG)

    let pelisG = document.querySelector("#generosP") // Lugar donde agregaremos el listado de Genero
    
    // Creamos un espacio para agregar el listado de GENEROS
    let generosAPI = ""

    for (let i=0; i<listaG.length; i++){
        generosAPI += `<li><a href="detailGenres.html?id=${listaG[i].id}"> ${listaG[i].name} </a></li>`
    }

    pelisG.innerHTML = generosAPI

})

.catch(function(e){
    console.log("Error" + e)
})
