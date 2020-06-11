window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let albumsPopulares = informacion.data;

            for (let index = 0; index <= 9; index++) {

                const cadaAlbum = albumsPopulares[index];
                console.log (cadaAlbum)
                let img = cadaAlbum.cover;
                let num = cadaAlbum.position;
                let id = cadaAlbum.id;
                let titleSong = cadaAlbum.title;
                let titleArt = cadaAlbum.artist.name;
                

                let htmlNuevoAlbum =`
                <section class="song">
                <p class="nums">` + num + `</p>
                <a href="infoalbum.html?idAlbum=` + id + `"><img class="tops" src="` + img + `" alt="">
                <p class="name"> ` +  titleSong + ` - ` + titleArt + `</p></a>
                </section>  
                `  
                document.querySelector(".ref2").innerHTML += htmlNuevoAlbum
            }
        })   
        })