window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let codigoPlaylist = queryString.get("idPlaylist");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)

            let titulo = resultado.title;
            let name = resultado.creator.name;
            let img = resultado.picture;
            let nºTracks = resultado.nb_tracks;
            let creacion = resultado.creation_date;
            let fans = resultado.fans;
            

            let nuevoHtml = `
            <div class="ref1">
            <img class="fototop" src="` + img + `" alt="">
            <h1 class="tit1">`+ titulo + `</h1>
            <p> Nº Tracks: ` + nºTracks + ` segundos</p>
            <p class="subt1">Creado por: ` + name + `</p>
            <p>Fecha de creación: ` + creacion + `</p>
            <p>Fans: ` + fans + `</p>
            </div>`

            document.querySelector(".comienzo").innerHTML = nuevoHtml
            
        }
    )

    // Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + codigoPlaylist)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(resultado) {
            console.log (resultado)
            let link = resultado.share;

        let nuevoHtmlLink = `<p class= linkshare>` + link + `</p>`

        document.querySelector(".dropdown-content").innerHTML += nuevoHtmlLink


        })
})
