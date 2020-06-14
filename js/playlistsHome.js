window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists")
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            console.log (informacion)
            let playlistsPopulares = informacion.data;

            for (let index = 0; index <= 9; index++) {

                const cadaplaylist = playlistsPopulares[index];
                console.log (cadaplaylist)
                let img = cadaplaylist.picture;
                let id = cadaplaylist.id;
                let title = cadaplaylist.title;
                
                let htmlNuevoplaylist =`
                <section class="song">
                <p class="nums"> - </p>
                <a href="infoplaylist.html?idPlaylist=` + id + `"><img class="tops" src="` + img + `" alt="">
                <p class="name"> ` +  title + `</p></a>
                </section>  
                `  
                document.querySelector(".ref2").innerHTML += htmlNuevoplaylist
            }
        })   
        })