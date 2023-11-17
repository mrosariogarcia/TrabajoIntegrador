let apiK = "5990392eb4d2b299d1f882dd6addfeae"

let qs = location.search;
let qsOBJ = new URLSearchParams(qs);
let idSerie = qsOBJ.get("id")

let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${apiK}`

fetch(urlDetalleSerie)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        // ahora si hacemos codigo
        // busco los elementos que necesito en la api

        let fotoPortada = document.querySelector('#fotoPortada')
        let tituloSerie = document.querySelector('.tituloSerie')
        let calificacion = document.querySelector('#calificacion')
        let fechaEstreno = document.querySelector('#fechaEstreno')
        let duracion = document.querySelector('#duracion')
        let sinopsis = document.querySelector('#sinopsis')
        let genero = document.querySelector('#genero')

        console.log(data)
        // lo remplazo en el html
        // FALTAN CALIFICACION Y GENEROS
        let foto = data.poster_path
        let imagen = `https://image.tmdb.org/t/p/w342/${foto}`
        fotoPortada.innerHTML = `<img src="${imagen}">`
        titulo.innerHTML = `${data.title}`
        fechaEstreno.innerHTML = `${data.release_date}`
        sinopsis.innerHTML = `${data.overview}`
    })
    .catch(function(er){
        confirm.log(er)
    })