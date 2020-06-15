window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search)

    let loBuscado = queryString.get("buscador");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + loBuscado)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(informacion) {
            let resul = informacion.data;

            if (resul.length == 0) {
                alert("No hay resultados");
            }

            for (let index = 0; index < resul.length; index++) {
                const cadaResult = resul[index];
                
                let img = cadaResult.album.cover;
                let title = cadaResult.title;
                let id = cadaResult.id;

                let htmlBuscado = `
                <section class="song">
                <p class="nums"> - </p>
                <a href="Infotracks.html?idTrack=` + id + `"> <img class="tops" src= "`+ img + `" alt="">
                <p class="name">` + title + `</p></a>
                </section>
                `
                
                document.querySelector(".results").innerHTML += htmlBuscado
            }
            
            
        }
    )
})