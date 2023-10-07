function calcularTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const limite = parseInt(document.getElementById('limite').value);
    const mostrarTodas = document.getElementById('mostrarTodas').checked;
    let resultadoHTML = '';

    if (mostrarTodas) {
        for (let i = 1; i <= numero; i++) {
            resultadoHTML += `<h3>Tabuada do ${i}:</h3>`;
            for (let j = 1; j <= limite; j++) {
                resultadoHTML += `<p>${i} x ${j} = ${i * j}</p>`;
            }
        }
    } else {
        resultadoHTML += `<h3>Tabuada do ${numero}:</h3>`;
        for (let i = 1; i <= limite; i++) {
            resultadoHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
