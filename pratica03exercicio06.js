function calcularMontante() {
    var capital = Number(document.getElementById("capital").value);
    var taxa = Number(document.getElementById("taxa").value);
    var tempo = Number(document.getElementById("tempo").value);
    var resultado = document.getElementById("resultado");

    if (capital <= 0 || taxa < 0 || tempo <= 0) {
        resultado.textContent = "Preencha os valores corretamente.";
        return;
    }

    var taxaDecimal = taxa / 100;
    var montante = capital * Math.pow(1 + taxaDecimal, tempo);

    resultado.textContent = "O montante e: R$ " + montante.toFixed(2);
}
