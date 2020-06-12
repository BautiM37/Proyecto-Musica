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
            let genero = resultado.genres.data.name;
            let idGen = resultado.genres.data.id;

            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <h1 class="tit1">` + album + `</h1>
            <a href="Info.artistas.html"><p class="subt1">Artista: ` + name + `</p></a>
            <p>Fecha de publicación: ` + date + `</p>
            <p>Género: <a href="Genero.html?">` + genero + `</a></p>
            <a href="Albums.html"><i class="fas fa-chevron-left"></i></a>
            `

            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }
    )

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
    
                for (let index = 0; index <= 4; index++) {
    
                const cadaTop = resultado.data[index];
    
                let name = cadaTop.title;
                let id = cadaTop.id;
                let img = cadaTop.album.cover;
    
                let nuevoHtmlTops = `
                    <section class="song">
                    <a href="Infotracks.html?idTrack= ` + id + `">
                    <p class="nums"> - </p>
                    <img class="tops" src="` + img + `" alt="">
                    <p class="name"> ` + name + `</p>
                    </a>
                    </section>
                `
    
                document.querySelector(".ref2").innerHTML += nuevoHtmlTops
                }
            }
        )
})