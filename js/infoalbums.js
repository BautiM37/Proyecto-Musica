window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let codigoAlbum = queryString.get("idAlbum");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)

            let name = resultado.artist.name;
            let img = resultado.cover;
            let date = resultado.release_date;
            let album = resultado.title;
            let genre = resultado.genres.data;
            let idArtist = resultado.artist.id;
            
            for (let index = 0; index <= genre.length; index++){
            
            const gens = genre[index];    
            let genero = gens.name;
            let idGenre = gens.id;

            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <div class="textosuperior">
            <h1 class="tit1">` + album + `</h1>
            <a href="Info.artistas.html?idArtist=` + idArtist + `"><p class="subt1">Artista: ` + name + `</p></a>
            <p class="subt1">Fecha de publicación: ` + date + `</p>
            <p class="subt1">Género: <a href="infoGenre.html?idGenre= ` + idGenre + `">` + genero + `</a></p>
            <a href="Albums.html"><i class="fas fa-chevron-left"></i></a>
            
            </div>`

            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }}
    )

    document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum)
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

        // FETCH PARA CANCIONES DEL ALBUM //

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + codigoAlbum)
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
                let img = resultado.cover;
    
                let nuevoHtmlTops = `
                <section class="song">
                <p class="nums"> - </p>
                <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "`+ img + `" alt="">
                <p class="name">` + name + `</p></a>
                </section>
                `
    
                document.querySelector(".ref2").innerHTML += nuevoHtmlTops
                }
            }
        )
})