window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let codigoTrack = queryString.get("idTrack");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)

            let titulo = resultado.title;
            let name = resultado.artist.name;
            let img = resultado.album.cover;
            let date = resultado.release_date;
            let album = resultado.album.title;
            let long = resultado.duration;
            let idAlbum = resultado.album.id;
            let idArt = resultado.artist.id;

            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <div class="textosuperior">
            <h1 class="tit1">`+ titulo + `</h1>
            <p class="subt1"> Duración: ` + long + ` segundos</p>
            <p class="subt1">Artista: <a href="Info.artistas.html?idArtist=` + idArt + `">` + name + `</a></p>
            <p class="subt1">Album: <a href="infoalbum.html?idAlbum=` + idAlbum + `">` + album + `</a></p>
            <p class="subt1">Fecha de publicación: ` + date + `</p>
            <a href="Playlist.html"><p class="agregarcancion">Agregar a Mi Playlist</p></a>
            <a href="Tracks.html"><i class="fas fa-chevron-left"></i></a>
            </div>`

            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }
    )

    document.getElementById("myBtn").onclick = function() {myFunction()};

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + codigoTrack)
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(resultado) {
                console.log (resultado)
                let link = resultado.share;
    
            let nuevoHtmlLink = `<p class= linkshare>` + link + `</p>`
    
            document.querySelector(".dropdown-content").innerHTML += nuevoHtmlLink
    
    
            })
})