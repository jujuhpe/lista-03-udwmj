function calcularArea() {
    var raio = Number(document.getElementById("raio").value);
    var resultado = document.getElementById("resultado");

    if (raio <= 0) {
        resultado.textContent = "Digite um raio maior que zero.";
        return;
    }

    var area = Math.PI * Math.pow(raio, 2);

    resultado.textContent = "A area do circulo e: " + area.toFixed(2);
}
