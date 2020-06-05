window.addEventListener("load", function() {
console.log ("hola")
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
    
                for (let index = 0; index <= 10; index++) {
    
                    const cadaArtists = artistasPopulares[index].name;
                    console.log (cadaArtists)
                    let img = cadaArtists;
                    let title = cadaArtists.title;
                    let posision =  cadaArtists.position;
    
                    let htmlNuevoArtists =
                    `
                    <section class="song">
                    <p class="nums"> </p>
                    <a href="Infoartistas.html"> <img class="topsART" src= "`+ data.picture + `" alt="">
                    <p class="name">` + data.title + `</p></a>
                    </section>
                    `  
                    document.querySelector(".ref2").innerHTML += htmlNuevoArtists
                }
            })  
            })