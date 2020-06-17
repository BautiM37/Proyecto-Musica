window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let codigoArtists = queryString.get("idArtist");

    // FETCH PARA ARTISTA //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtists)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)

            let name = resultado.name;
            let img = resultado.picture;
            let fans = resultado.nb_fan;

            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <div class="textosuperior">
            <h1 class="tit1">` + name + `</h1>
            <p class="subt1">` + fans + ` seguidores</p>
            <p class="subt1">Tracks destacados:</p>
            <a href="Artists.html"><i class="fas fa-chevron-left"></i></a>
            </div>
            `


            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }
    )

    document.getElementById("myBtn").onclick = function() {myFunction()};

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtists)
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

    // FETCH PARA TOP 5 CANCIONES DEL ARTISTA //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + codigoArtists + "/top?limit=50" )
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