window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get("buscador");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=" + loBuscado)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let resul = informacion.data;

            if (resul.length == 0) {

                let htmlEmpty = `
                <section class="songen">
                <p class="nums"> <a href="Index.html"><i class="fas fa-chevron-left"></i></a> </p>
                <img class="fotoError" src="img/error.jpg" alt=""><p class="name">Lo sentimos, no encontramos lo que buscabas</p></a>
                <div class="error"><h4>Consejo: si tocas la flecha que apunta a la izquierda, podrás probar suerte denuevo buscando lo que quieres! No te olvides de seguirnos en nuestras redes sociales!</h4></div>
                </section>
                `
                let desaparecer = `
                <div class="desaparecer"></div>
                `
                document.querySelector(".que1").innerHTML = desaparecer
                document.querySelector(".que2").innerHTML = desaparecer
                document.querySelector(".que3").innerHTML = desaparecer
                document.querySelector(".updated").innerHTML = desaparecer
                document.querySelector(".blackhole").innerHTML = desaparecer
                document.querySelector(".resultsTra").innerHTML += htmlEmpty
            }

            for (let index = 0; index < 5; index++) {
                const cadaResult = resul[index];
                
                let img = cadaResult.album.cover;
                let title = cadaResult.title;
                let id = cadaResult.id;

                let htmlBuscado = `
                <section class="songen">
                <p class="nums"> - </p>
                <a href="Infotracks.html?idTrack=` + id + `"> <img class="topsen" src= "`+ img + `" alt="">
                <p class="name">` + title + `</p></a>
                </section>
                `
                let htmlBuenon = `
                <h4 class="tit1">` + loBuscado + `</h4>
                `

                document.querySelector(".resultsTra").innerHTML += htmlBuscado
                document.querySelector(".tit1").innerHTML = htmlBuenon
            }
            
            
        }
    )

// ACA VIENEN LOS RESULTADOS DE ALBUMS //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + loBuscado)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let resulAl = informacion.data;
            console.log(informacion)

            for (let index = 0; index < 5; index++) {
                const cadaResultAl = resulAl[index];
                
                let imgAl = cadaResultAl.cover;
                let titleAl = cadaResultAl.title;
                let idAl = cadaResultAl.id;

                let htmlBuscadoAl = `
                <section class="songen">
                <p class="nums"> - </p>
                <a href="infoalbum.html?idAlbum=` + idAl + `"> <img class="topsen" src= "`+ imgAl + `" alt="">
                <p class="name">` + titleAl + `</p></a>
                </section>
                `

                document.querySelector(".resultsAlb").innerHTML += htmlBuscadoAl
            }
            
            
        }
    )

    // ACA VIENEN LOS RESULTADOS DE ARTISTS //

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + loBuscado)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let resulAr = informacion.data;
            console.log(informacion)

            for (let index = 0; index < 5; index++) {
                const cadaResultAr = resulAr[index];
                
                let imgAr = cadaResultAr.picture;
                let titleAr = cadaResultAr.name;
                let idAr = cadaResultAr.id;

                let htmlBuscadoAr = `
                <section class="songen">
                <p class="nums"> - </p>
                <a href="Info.artistas.html?idArtist=` + idAr + `"> <img class="topsARTen" src= "`+ imgAr + `" alt="">
                <p class="name">` + titleAr + `</p></a>
                </section>
                `

                document.querySelector(".resultsArt").innerHTML += htmlBuscadoAr
            }
            
            
        }
    )
})