function calcularVolume() {
    var raio = Number(document.getElementById("raio").value);
    var resultado = document.getElementById("resultado");

    if (raio <= 0) {
        resultado.textContent = "Digite um raio maior que zero.";
        return;
    }

    var volume = 4 / 3 * Math.PI * Math.pow(raio, 3);

    resultado.textContent = "O volume da esfera e: " + volume.toFixed(2);
}
