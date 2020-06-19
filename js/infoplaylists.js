window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let codigoPlaylist = queryString.get("idPlaylist");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)

            let titulo = resultado.title;
            let name = resultado.creator.name;
            let nºTracks = resultado.nb_tracks;
            let desc = resultado.description;
            let fans = resultado.fans;
            

            let nuevoHtml = `
            <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=007FEB&layout=dark&size=medium&type=playlist&id=` + codigoPlaylist + `&app_id=1" width="200" height="200"></iframe>
            <div class="textosuperior">
            <h1 class="tit1">`+ titulo + `</h1>
            <p class="subt1"> Nº Tracks: ` + nºTracks + `</p>
            <p class="subt1">Creado por: ` + name + `</p>
            <p class="subt1">Fans: ` + fans + `</p>
            <p class="subt1">Descripción: ` + desc + `</p>
            <a href="playlistsHome.html"><i class="fas fa-chevron-left"></i></a>
            </div>`

            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }
    )

document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylist)
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

            // FETCH PARA CANCIONES DE LA PLAYLIST //

            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylist)
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )
            .then(
                function(resultado) {
                    console.log (resultado)
                    const tracksAlbums = resultado.tracks.data;
        
                    for (let index = 0; index <= tracksAlbums.length; index++) {
        
                    const cadaAlbum = tracksAlbums[index];
        
                    let name = cadaAlbum.title;
                    let id = cadaAlbum.id;
                    let img = cadaAlbum.album.cover;
        
                    let nuevoHtmlTops = `
                    <section class="song">
                    <p class="nums"> - </p>
                    <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "`+ img + `" alt="">
                    <p class="name">` + name + `</p></a>
                    </section>
                    `
        
                    document.querySelector(".ref2").innerHTML += nuevoHtmlTops
        
                    }
        
            })
})