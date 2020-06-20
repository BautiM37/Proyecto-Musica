window.addEventListener("load", function(){

    if (sessionStorage.getItem("favs") == null) {
        
        let htmlEmpty = `
                <section class="songen">
                <p class="nums"> - </p>
                <img class="fotoError" src="img/error.jpg" alt=""><p class="name">Parece que no tienes canciones agregadas a tu playlist por el momento</p></a>
                </section>
                `
            document.querySelector(".ref2").innerHTML = htmlEmpty

    } else {

        let favs = localStorage.getItem("favs").split(",")

        for (let index = 0; index < favs.length; index++) {
            
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + favs[index])
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(resultado) {
                console.log (resultado)
            
                let name = resultado.title;
                let id = resultado.id;
                let img = resultado.album.cover;

        let htmlWin =`
        <section class="song">
        <p class="nums"> - </p>
        <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "` + img + `" alt="">
        <p class="name">` + name + `</p></a>
        </section>
        `
        document.querySelector(".ref2").innerHTML += htmlWin
    })
    }
}})

