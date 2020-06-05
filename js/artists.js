window.addEventListener("load", function() {

    let queryString = new URLSearchParams (location.search);
    let codigoArtists = queryString.get()
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let artistasPopulares = informacion.data;

            for (let index = 0; index < 10; index++) {
                console.log(Artista)
                const Artista = artistasPopulares[index];
                let img = Artista.picture;
                
                
                let title = data.title;
                let id = data.id;

                let htmlArtists = 
                `
                <section class="song">
                <p class="nums">1</p>
                <a href="` + id + `"><img class="topsART" src="` + picture + `" alt="">
                <p class="name"> `+ name +` </p></a>
                </section>
                `
                
                
                document.querySelector(".listadoArtistsPopulares").innerHTML += htmlArtists
            }
        } )
            
        })