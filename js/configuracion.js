function cambiaFondo (x){

    console.log (x.value)


    
    document.querySelector("header").style.backgroundColor = x.value;
    document.querySelector("div.ref1").style.backgroundColor = x.value;

    
    localStorage.setItem("color", x.value)
}

window.addEventListener("load", function(){
    let color= localStorage.getItem("color")


    if (color != null){
        
        document.querySelector("header").style.backgroundColor = color;
        document.querySelector(".ref1").style.backgroundColor = color;
    }
})
