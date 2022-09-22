let buscar = document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()


    let idArtistaSeleccionado = document.getElementById("artista").value 
    alert(idArtistaSeleccionado)
})