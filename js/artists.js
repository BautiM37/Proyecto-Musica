window.addEventListener("load", function() {

    let queryString = new URLSearchParams (location.search);
    let codigoArtists = queryString.get()

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(informacion) {
                console.log (informacion)
                let artistasPopulares = informacion.artists.data;
    
                for (let index = 0; index <= 9; index++) {
    
                    const cadaArtists = artistasPopulares[index];
                    console.log (cadaArtists)
                    let img = cadaArtists;
                    let title = cadaArtists.title;
    
                    let htmlNuevoArtists =
                    `
                    <section class="song">
                    <p class="nums"> 1 </p>
                    <a href="Infoartistas.html"> <img class="topsART" src= "`+ img + `" alt="">
                    <p class="name">` + title + `</p></a>
                    </section>
                    `  
                    document.querySelector(".ref2").innerHTML += htmlNuevoArtists
                }
            })  
            })