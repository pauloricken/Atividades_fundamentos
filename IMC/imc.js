function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || nome === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = getClassificacaoIMC(imc);

    document.getElementById('resultado-nome').textContent = nome;
    document.getElementById('resultado-imc').textContent = imc.toFixed(2);
    document.getElementById('resultado-classificacao').textContent = classificacao;
}

function getClassificacaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Pré-obesidade";
    } else if (imc >= 30.0 && imc <= 34.9) {
        return "Obesidade Grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        return "Obesidade Grau 2";
    } else {
        return "Obesidade Grau 3";
    }
}
