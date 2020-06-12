window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            const cadaGenre = informacion.data[index];
            
            let name = cadaGenre.name;
            let img = cadaGenre.picture;
        
            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <h2 class="tit1">` + name + `</h2>
            `

            document.querySelector(".ref1").innerHTML += nuevoHtml
            
        }
    )}
    // Esto fue para poner la foto del genero y el nombre // 
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            const cadaGenre = informacion.data[index];
            
            let name = cadaGenre.name;
            let img = cadaGenre.picture;
        
            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <h2 class="tit1">` + name + `</h2>
            `

            document.querySelector(".ref1").innerHTML += nuevoHtml
            
        }
    )}
    // Esto fue para poner la foto del genero y el nombre //
