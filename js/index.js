window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let tracksPopulares = informacion.data;

            for (let index = 0; index <= 3; index++) {
                console.log (index)
                const cadaTrack = tracksPopulares[index];
                let img = cadaTrack.images.original.url;
                
                
                let title = cadaTrack.title;
                let id = cadaTrack.id;

                let htmlNuevoTrack =`
                <section>
                <img class="img" src="` + img + `" alt="">
                <p class="nom"> ` + title + ` </p>
                </section>
                `  
                document.querySelector(".names").innerHTML += htmlNuevoTrack
            }
            
            
        }
    )
})