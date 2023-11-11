let formBusqueda = document.querySelector(".busqueda")
let formInput = document.querySelector("#nombre")

formBusqueda.addEventListener("submit", function(e){

    if(formInput.value == "" ){
        e.preventDefault();
        alert('Escriba algo')
    }

})

