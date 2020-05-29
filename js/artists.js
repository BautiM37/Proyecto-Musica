window.addEventListener("load", function() {

    fetch("https://api.deezer.com/artist/ " +  + " ")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let artistasPopulares = informacion.data;
            
            for (let index = 0; index < artistasPopulares.length; index++) {
                const Artista = artistasPopulares[index];
                let img = Artista.images.original.url;
                
                
                let title = Artista.title;
                let id = Artista.id;

                let htmlNuevoGif = `
                    <li class="amarillito">
                        <a href="detalleGif.html?idDeGif=` + id + `">
                            <h2>` + title + `</h2>
                        </a>
                        <img src="` + img + `">
                    </li>
                `
                
                document.querySelector(".listadoDeGifsPopulares").innerHTML += htmlNuevoGif
            }
            
            
        }
    )