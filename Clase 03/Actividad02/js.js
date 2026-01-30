let demo2 = 0;

function actualizarContador() {
    document.getElementById("contador").innerHTML = demo2;
}

function sumar() {
    demo2++;
    actualizarContador();
}

function restar() {
    demo2--;
    actualizarContador();
}
