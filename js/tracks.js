window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://www.deezer.com/track/")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let tracksPopulares = informacion.tracks.data;

            for (let index = 0; index <= 9; index++) {

                const cadaTrack = tracksPopulares[index];
                console.log (cadaTrack)
                let img = cadaTrack.album.cover;
                let num = cadaTrack.position;
                let id = cadaTrack.id;
                let title = cadaTrack.title;

                let htmlNuevoTrack =`
                <section class="song">
                <a href="Infotracks.html"><p class="nums">` + num + `</p>
                <img class="tops" src="` + img + `" alt="">
                <p class="name">` + title + `</p></a>
                </section>   
                `  
                document.querySelector(".ref2").innerHTML += htmlNuevoTrack
            }
        })   
        })