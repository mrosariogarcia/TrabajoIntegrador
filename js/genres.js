// GENEROS

let res = location.search;
let resObj = new URLSearchParams(res);

let idP = resObj.get('id_genero_pelis')
let idS = resObj.get('id_genero_series')


let generosP = `https://api.themoviedb.org/3/genre/movie/list?api_key=5990392eb4d2b299d1f882dd6addfeae`
let generosS = `https://api.themoviedb.org/3/genre/tv/list?api_key=5990392eb4d2b299d1f882dd6addfeae`