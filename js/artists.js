window.addEventListener("load", function() {

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(informacion) {
                console.log (informacion)
                let artistasPopulares = informacion.data;
    
                for (let index = 0; index <= 9; index++) {
    
                    const cadaArtists = artistasPopulares[index];
                    console.log (cadaArtists)

                    let img = cadaArtists.picture;
                    let name = cadaArtists.name;
                    let position =  cadaArtists.position;
                    let id = cadaArtists.id;
    
                    let htmlNuevoArtists =
                    `
                    <section class="song">
                    <p class="nums">` + position + `</p>
                    <a href="Info.artistas.html?idArtist=` + id + `"> <img class="topsART" src= "`+ img + `" alt="">
                    <p class="name">` + name + `</p></a>
                    </section>
                    `  
                    document.querySelector(".ref2").innerHTML += htmlNuevoArtists
                }
            })  
            })