window.addEventListener("load", function() {


    // Paso 1: Chequeo si hay gifs favoritos

    if(sessionStorage.getItem("favs") != null) {

        // Paso 2: Leemos los favoritos

        let favoritos = sessionStorage.getItem("favs").split(",")

        // Paso 3: Recorremos el array de favoritos
        for (let i = 0; i < favoritos.length; i++) {

            // Paso 4: Traigo de Giphy el detalle del gif
            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + favoritos[i])
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )
            .then(
                function(resultado) {
                    console.log(resultado)
                    // Acá es donde vamos a trabajar
                
                    const sep = resultado;
                    let name = sep.title;
                    let img = sep.album.cover;
                    let id = sep.id;

                    // Paso 5 y último: Lo muestro

                    let htmlNuevoFav = `
                    <section class="song">
                    <p class="nums"> - </p>
                    <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "` + img + `" alt="">
                    <p class="name">` + name + `</p></a>
                    </section>
                    `
                
                    document.querySelector(".ref2").innerHTML += htmlNuevoFav
                }
            )

        }

    } else {    
        let htmlEmpty = `
        <section class="songen">
        <p class="nums"> - </p>
        <img class="fotoError" src="img/error.jpg" alt=""><p class="name">Parece que no tienes canciones agregadas a tu playlist por el momento</p></a>
        </section>
        `
    document.querySelector(".ref2").innerHTML = htmlEmpty
    }
})

