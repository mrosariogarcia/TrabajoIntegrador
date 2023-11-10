fetch("https://api.themoviedb.org/3/search/movie")

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data.results)
})

.catch(function(e){
    console.log("Error")
})