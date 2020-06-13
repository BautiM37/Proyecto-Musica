window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let genresPopulares = informacion.data;

            for (let index = 0; index <= genresPopulares.length; index++) {

                const cadaGenre = genresPopulares[index];
                console.log (cadaGenre)
                let img = cadaGenre.picture;
                let id = cadaGenre.id;
                let title = cadaGenre.name;

                let htmlNuevoGenre =`
                <section class="genre">
                <a href="infoGenre.html?idGenre= ` + id + `"><p class="nums"> - </p>
                <img class="tops" src="` + img + `" alt="">
                <p class="name">` + title + `</p></a>
                </section>   
                `  
                document.querySelector(".ref2").innerHTML += htmlNuevoGenre
            }
        })   
        })