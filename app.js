let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos = 3;

console.log(numeroSecreto);

function asignartextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
      if (numeroSecreto === numeroDeUsuario){
        asignartextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
      if (numeroDeUsuario > numeroSecreto) {
        asignartextoElemento('p','El número secreto es menor');
      }  else {
        asignartextoElemento('p','El número secreto es mayor');
      }
      intentos++;

      //if (intentos > maximosIntentos){
        //asignartextoElemento('p',`Llegaste al número máximo de ${maximosIntentos} intentos `);
        //document.getElementById('reiniciar').removeAttribute('disabled');
      //}
      limpiarCaja();
    }   

        return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
    
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
       asignartextoElemento('p','Ya se sortearon todos los números posibles'); 
    } else{
        //Si el número generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignartextoElemento('h1','Juego del número secreto!');
    asignartextoElemento('P',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
