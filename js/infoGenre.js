window.addEventListener("load", function() {

        let queryString = new URLSearchParams(location.search);
    
        let codigoGenre = queryString.get("idGenre");
    
        // FETCH PARA GENRE //
    
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + codigoGenre)
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(resultado) {
                console.log (resultado)
    
                let name = resultado.name;
                let img = resultado.picture; 
            
                let nuevoHtmlGenre = `
                <img class= "fototop" src="` + img + `" alt="">
                <div class="textosuperior">
                <h2 class="tit1"> ` + name + ` </h2>
                <p class="subt1">Los mejores artistas de ` + name + `</p>
                <a href="Tracks.html"><i class="fas fa-chevron-left"></i></a>
                </div>`
    
                document.querySelector(".ref1").innerHTML = nuevoHtmlGenre
                
            }
        )
    
        // FETCH PARA ARTISTS DEL GENRE //
    
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + codigoGenre + "/artists" )
        .then(
            function(respuesta) {
                return respuesta.json();            
            }
        )
        .then(
            function(resultado) {
                console.log (resultado)

                for (let index = 0; index <= resultado.data.length; index++) {

                const cadaGenre = resultado.data[index];
            
                let nom = cadaGenre.name;
                let img = cadaGenre.picture;
                let id = cadaGenre.id;
            
                let nuevoHtmlTops = `
                    <section class="song">
                    <p class="nums"> - </p>
                    <a href="Info.artistas.html?idArtist=` + id + `"> <img class="tops" src= "`+ img + `" alt="">
                    <p class="name">` + nom + `</p></a>
                    </section>
                `
    
                document.querySelector(".ref").innerHTML += nuevoHtmlTops
                }
            }
        )
    })
