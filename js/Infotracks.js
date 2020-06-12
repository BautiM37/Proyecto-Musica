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
            <div class="ref1">
            <img class="fototop" src="` + img + `" alt="">
            <h1 class="tit1">`+ titulo + `</h1>
            <p> Duración: ` + long + ` segundos</p>
            <p class="subt1">Artista: <a href="Info.artistas.html?idArtist=` + idArt + `">` + name + `</a></p>
            <p>Album: <a href="infoalbum.html?idAlbum=` + idAlbum + `">` + album + `</a></p>
            <p>Fecha de publicación: ` + date + `</p>
            <a href="Playlist.html"><p>Agregar a Mi Playlist</p></a>
            <a href="Tracks.html"><i class="fas fa-chevron-left"></i></a>
            </div>`

            document.querySelector(".comienzo").innerHTML = nuevoHtml
            
        }
    )
})