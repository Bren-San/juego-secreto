let numeroSecreto = 0
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); /*trae los elementos del html a traves del id, como trae tood el bloque completo tenemos que especificar que necesitamos, por eso se utiliza .value para indicar que queremos el valor ingresado */
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','Numero secreto es menor');
        } else {
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ' ';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los números
    if(listaNumerosSortedos.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
         // Si el numero generado esta incluido en la lista 
        if(listaNumerosSortedos.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad se esta llamando asi misma la funcion
        } else{
            listaNumerosSortedos.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Elige un numero del 0 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

