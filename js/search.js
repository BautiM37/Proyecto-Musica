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
                let htmlEmpty = `
                <section class="songen">
                <p class="nums"> <a href="Index.html"><i class="fas fa-chevron-left"></i></a> </p>
                <img class="fotoError" src="img/error.jpg" alt=""><p class="name">Lo sentimos, no encontramos lo que buscabas</p></a>
                <div class="error"><h4>Consejo: si tocas la flecha que apunta a la izquierda, podrás probar suerte denuevo buscando lo que quieres! No te olvides de seguirnos en nuestras redes sociales!</h4></div>
                </section>
                `
                let desaparecer = `
                <div class="desaparecer"></div>
                `

                document.querySelector(".updated").innerHTML = desaparecer
                document.querySelector(".blackhole").innerHTML = desaparecer
                document.querySelector(".results").innerHTML += htmlEmpty
            }

            for (let index = 0; index < resul.length; index++) {
                const cadaResult = resul[index];
                
                let img = cadaResult.album.cover;
                let title = cadaResult.title;
                let id = cadaResult.id;

                let htmlBuscado = `
                <section class="songen">
                <p class="nums"> - </p>
                <a href="Infotracks.html?idTrack=` + id + `"> <img class="topsen" src= "`+ img + `" alt="">
                <p class="name">` + title + `</p></a>
                </section>
                `
                let htmlBuenon = `
                <h4 class="tit1">` + loBuscado + `</h4>
                `

                document.querySelector(".results").innerHTML += htmlBuscado
                document.querySelector(".tit1").innerHTML = htmlBuenon
            }
            
            
        }
    )
})