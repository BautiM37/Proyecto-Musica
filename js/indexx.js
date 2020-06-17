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

            for (let index = 0; index <= 9; index++) {

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
            $(document).ready(function(){
                $('.names').slick({
                    autoplay: true,
                    slidesToShow: 4,
                    arrows: false
                });
              });
            
            
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

            for (let index = 0; index <= 9; index++) {

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
            $(document).ready(function(){
                $('.nameAl').slick({
                    autoplay: true,
                    slidesToShow: 4,
                    arrows: false
                });
              });
            
        }
    )

     // ACA VIENEN LOS ARTISTS//

     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
     .then(
         function(respuesta) {
             return respuesta.json();            
         }
     )
     .then(
         function(informacion) {
             console.log (informacion)
             let artistsPopulares = informacion.artists.data;
 
             for (let index = 0; index <= 9; index++) {
 
                 const cadaArtist = artistsPopulares[index];
                 console.log (cadaArtist)
                 let img = cadaArtist.picture;
                 
                 
                 let title = cadaArtist.name;
 
                 let htmlNuevoArtist =`
                 <section>
                 <img class="art" src="` + img + `" alt="">
                 <p class="nom"> ` + title + ` </p>
                 </section>
                 `  
                 document.querySelector(".nameAr").innerHTML += htmlNuevoArtist
             }
             $(document).ready(function(){
                $('.nameAr').slick({
                    autoplay: true,
                    slidesToShow: 4,
                    arrows: false
                });
              }); 
             
         }
     )

     // ACA VIENEN LOS GENRES //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let generosPopulares = informacion.data;

            for (let index = 1; index <= 10; index++) {

                const cadaGenre = generosPopulares[index];
                console.log (cadaGenre)

                let img = cadaGenre.picture;
                let title = cadaGenre.name;

                let htmlNuevoGenero =`
                <section>
                <img class="img" src="` + img + `" alt="">
                <p class="nom"> ` + title + ` </p>
                </section>
                `  
                document.querySelector(".nameG").innerHTML += htmlNuevoGenero
            }
            $(document).ready(function(){
                $('.nameG').slick({
                    autoplay: true,
                    slidesToShow: 4,
                    arrows: false
                });
              });
            
        }
    )

     // ACA VIENEN LAS PLAYLISTS//

     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
     .then(
         function(respuesta) {
             return respuesta.json();            
         }
     )
     .then(
         function(informacion) {
             console.log (informacion)
             let playlistsPopulares = informacion.playlists.data;
 
             for (let index = 0; index <= 9; index++) {
 
                 const cadaPlaylist = playlistsPopulares[index];
                 console.log (cadaPlaylist)
                 
                 let img = cadaPlaylist.picture;
                 let title = cadaPlaylist.title;
 
                 let htmlNuevoPlaylist =`
                 <section>
                 <img class="img" src="` + img + `" alt="">
                 <p class="nom"> ` + title + ` </p>
                 </section>
                 `  
                 document.querySelector(".namePl").innerHTML += htmlNuevoPlaylist
             }
             $(document).ready(function(){
                $('.namePl').slick({
                    autoplay: true,
                    slidesToShow: 4,
                    arrows: false
                });
              }); 
             
         }
     )

})
