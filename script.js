let contador = 0;

const numeroAtual = document.getElementById('numeroAtual');

function increment() {
    contador ++;
    numeroAtual.innerHTML = contador;
}

function decrement() {
    contador --;
    numeroAtual.innerHTML = contador;
}