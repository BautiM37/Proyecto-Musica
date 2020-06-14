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
            let desc = resultado.description;
            let fans = resultado.fans;
            

            let nuevoHtml = `
            <img class="fototop" src="` + img + `" alt="">
            <h1 class="tit1">`+ titulo + `</h1>
            <p> Nº Tracks: ` + nºTracks + `</p>
            <p class="subt1">Creado por: ` + name + `</p>
            <p>Fans: ` + fans + `</p>
            <p>Descripción: ` + desc + `</p>
            <a href="playlistsHome.html"><i class="fas fa-chevron-left"></i></a>
            `

            document.querySelector(".ref1").innerHTML = nuevoHtml
            
        }
    )

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