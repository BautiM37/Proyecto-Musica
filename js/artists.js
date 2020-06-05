window.addEventListener("load", function() {

    let queryString = new URLSearchParams (location.search);
    let codigoArtists = queryString.get()
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/ " +  + " ")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let artistasPopulares = informacion.data;
            
            for (let index = 0; index < 8; index++) {
                const Artista = artistasPopulares[index];
                let img = Artista.images.original.url;
                
                
                let title = Artista.title;
                let id = Artista.id;

                let htmlArtists = `
                <section class="song">
                <p class="nums">1</p>
                <a href="` + id + `"><img class="topsART" src="` + img + `" alt="">
                <p class="name"> `+ title +` </p></a>
            </section>
                `
                
                
                document.querySelector(".listadoArtistsPopulares").innerHTML += htmlArtists
            }
        } )
            
        })