window.addEventListener("load", function() {

    // ACA VIENEN LOS TRACKS //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let tracksPopulares = informacion.tracks.data;

            for (let index = 0; index <= 3; index++) {

                const cadaTrack = tracksPopulares[index];
                console.log (cadaTrack)
                let img = cadaTrack.album.cover;
                
                
                let title = cadaTrack.title;

                let htmlNuevoTrack =`
                <section>
                <img class="img" src="` + img + `" alt="">
                <p class="nom"> ` + title + ` </p>
                </section>
                `  
                document.querySelector(".names").innerHTML += htmlNuevoTrack
            }
            
            
        }
    )

    // ACA VIENEN LOS ALBUMS//

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let albumsPopulares = informacion.albums.data;

            for (let index = 0; index <= 3; index++) {

                const cadaAlbum = albumsPopulares[index];
                console.log (cadaAlbum)
                let img = cadaAlbum.cover;
                
                
                let title = cadaAlbum.title;

                let htmlNuevoAlbum =`
                <section>
                <img class="img" src="` + img + `" alt="">
                <p class="nom"> ` + title + ` </p>
                </section>
                `  
                document.querySelector(".nameAl").innerHTML += htmlNuevoAlbum
            }
            
            
        }
    )
})
