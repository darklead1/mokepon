
let ataqueJugador
let ataqueEnemigo

// funcion creada para que el codigo se ejecute después de haber cargado todos loss elementos del html
function iniciarJuego(){

    let botonMascotaJugador = document.getElementById ("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
 
    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    
    let botonTierra = document.getElementById ("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

   
}



function seleccionarMascotaJugador(){
    let inputSquartle = document.getElementById("Squartletortugafachera")
    let inputBulbasour = document.getElementById("Bulbasour")
    let inputCharmander = document.getElementById("Charmander")
    let SpanMascotaJugador = document.getElementById ("mascota-jugador")

    if( inputSquartle.checked == true){
        SpanMascotaJugador.innerHTML = " Squartle"
        
    } else if (inputBulbasour.checked == true){
        SpanMascotaJugador.innerHTML = " Bulbasour"

    } else if(inputCharmander.checked == true) {
        SpanMascotaJugador.innerHTML = " Charmander"
    } else {
        alert ("selecciona una opción")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 3)
    let SpanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if ( mascotaAleatoria == 1){
        SpanMascotaEnemigo.innerHTML = "Squartle"
    } else if ( mascotaAleatoria == 2){
        SpanMascotaEnemigo.innerHTML = "Bulbasour"

    } else {
        SpanMascotaEnemigo.innerHTML = "Charmander"
}

}

function ataqueEnemigoAleatorio (){
    let ataqueAleatorio = aleatorio (1, 3)

    if ( ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "TIERRA"    
    
    } else {
     ataqueEnemigo = "AGUA" }

    crearMensaje()

}

function crearMensaje(){

    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu Mokepon atacó con " + ataqueJugador + " el Mokepon del enemigo atacó con " + ataqueEnemigo 

    sectionMensajes.appendChild(parrafo)
}



function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueEnemigoAleatorio()

    //alert (ataqueJugador)
    //alert (ataqueEnemigo)
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueEnemigoAleatorio()
   // alert (ataqueJugador)
    //alert (ataqueEnemigo)
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueEnemigoAleatorio()
    //alert (ataqueJugador)
    //alert (ataqueEnemigo)
}



function aleatorio (min, max){
    return Math.floor (Math.random() * (max - min + 1 ) +min)



}

window.addEventListener ('load', iniciarJuego)


