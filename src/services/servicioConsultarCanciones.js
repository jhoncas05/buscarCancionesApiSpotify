let URI = "https://api.spotify.com/v1/artists/36QJpDe2go2KgaRleHCDTp/top-tracks?market=US"
let buscar = document.getElementById("buscar")
buscar.addEventListener("click", function (evento) {
  evento.preventDefault()
  let artista = document.getElementById("artista").value
  console.log(artista);
  URI = `https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
  const TOKEN = "Bearer BQCZUuzHpCH6sqMikCyWmj10wS5h6qKtzpIzm7qZtsE2iVfvqB2nAI-Gz82DgvNLgC9CII4Y9eVm76uCs8STicLygNGbI4PUY0IMH8PSnvHunaP0-13SdB5jrnl0FBntz_UJ0KiXc4QVnjlXFNs61XpYwGHMXU7zSQowy4vbJG79Dt9_eq9pjtewI8D5DCI"

  const PETICION = {
    method: "GET",
    headers: { Authorization: TOKEN }
  }

  fetch(URI, PETICION)
    .then(function (respuesta) {
      return respuesta.json(); //garantizo formato JSON
    })
    .then(function (respuesta) {
      console.log(respuesta); //Hago lo que quiera con la respuesta
      console.log(respuesta.tracks);//accedo a un atributo de la respuesta

      //recorrer el Arreglo
      let fila = document.getElementById("fila")
      fila.innerHTML = ""

      respuesta.tracks.forEach(function (cancion) {
        /*console.log(cancion)
        console.log(cancion.name);
        console.log(cancion.preview_url);
        console.log(cancion.album.images[0].url);
        console.log(cancion.popularity);
        console.log(cancion.album.release_date);
        console.log(cancion.album.name);*/
        let columna = document.createElement("div")
        columna.classList.add("col", "mt-5")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "shadow", "h-100")

        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls", "controls")
        audio.src = cancion.preview_url

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid", "w-100")
        imagen.src = cancion.album.images[0].url

        let nombre = document.createElement("h1")
        nombre.classList.add("fs-5", "text-info", "fw-bold", "text-center")
        nombre.textContent = cancion.name

        let nombrealbum = document.createElement("h1")
        nombrealbum.classList.add("fs-5", "text-info", "fw-bold", "text-center")
        nombrealbum.textContent = cancion.album.name

        let fechaLanzamiento = document.createElement("h3")
        fechaLanzamiento.classList.add("fs-5", "text-danger", "text-center", "fw-bold")
        fechaLanzamiento.textContent = cancion.album.release_date

        let popularidad = document.createElement("h3")
        popularidad.classList.add("fs-5", "text-warning", "text-center", "fw-bold")
        popularidad.textContent = "popularity: " + cancion.popularity

        let fechaLanzamientoalbum = document.createElement("h3")
        fechaLanzamientoalbum.classList.add("fs-5", "text-danger", "text-center", "fw-bold")
        fechaLanzamientoalbum.textContent = cancion.album.release_date
        //padres e hijos
        tarjeta.appendChild(nombrealbum)
        tarjeta.appendChild(fechaLanzamientoalbum)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(fechaLanzamiento)
        tarjeta.appendChild(popularidad)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

      });
    })
    .catch(function (respuestaError) {
      console.log(respuestaError);
    });


})





//receta para concumir apis con js puro

//1. si yo quiero consumir un api
//debo saber para donde ir y a que servicio....
//debo configurar la uri

//2. configuro datos especiales o de Control en el servidor


//3. configuro la peticion
//nota solo get y put configuran body
//para js la peticion es un objeto


//4. arranque pues mijo
//consuma el api

  //let etiquetaImagen = document.getElementById("caja")
  //etiquetaImagen.src=(cancion.album.images[0].url)

  //let etiquetaTitulo=document.getElementById("titulo")
  //etiquetaTitulo.textContent=(cancion.album.name)



