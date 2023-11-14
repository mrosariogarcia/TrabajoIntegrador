let apiK = "5990392eb4d2b299d1f882dd6addfeae"

//Generos PELICULAS

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiK}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    let listaP = data.genres
    console.log(listaP)

    let pelisG = document.querySelector("#generosP") // Lugar donde agregaremos el listado de Genero
    
    // Creamos un espacio para agregar el listado de GENEROS
    let generosAPI = ""

    for (let i=0; i<listaP.length; i++){
        generosAPI += `<li><a href="detailGenres.html?id=${listaP[i].id}"> ${listaP[i].name} </a></li>`
    }

    pelisG.innerHTML = generosAPI

})

.catch(function(e){
    console.log("Error" + e)
})

//Generos SERIES
fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiK}`)

.then(function(response){
    let data = response.json()
    return data
})

.then(function(data){
    let listaS = data.genres
    console.log(listaS)

    let seriesG = document.querySelector("#generosS")
    let generosAPIS = ""

    for (let i=0; i<listaS.length; i++){
        generosAPIS += `<li><a href="detailGenres.html?id=${listaS[i].id}"> ${listaS[i].name} </a></li>`
    }

    seriesG.innerHTML = generosAPIS
})

.catch(function(e){
    console.log("Error" + e)
})
