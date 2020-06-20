window.addEventListener("load", function() {

    if(sessionStorage.getItem("favs") != null) {

        let favoritos = sessionStorage.getItem("favs").split(",")

        for (let i = 0; i < favoritos.length; i++) {

            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + favoritos[i])
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )
            .then(
                function(resultado) {
                    console.log(resultado)
                
                    const sep = resultado;
                    let name = sep.title;
                    let img = sep.album.cover;
                    let id = sep.id;

                    let htmlNuevoFav = `
                    <section class="song">
                    <p class="nums"> - </p>
                    <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "` + img + `" alt="">
                    <p class="name">` + name + `</p></a>
                    </section>
                    `
                
                document.querySelector(".ref2").innerHTML += htmlNuevoFav

                document.querySelector(".dislike").addEventListener("click", function(){
                    let dislike = sessionStorage.removeItem("favs")
                    console.log(dislike)

                })
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

