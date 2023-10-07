function calcularViagem() {
    const nomeViagem = document.getElementById('nomeViagem').value;
    const kmPercorridos = parseFloat(document.getElementById('kmPercorridos').value);
    const litrosCombustivel = parseFloat(document.getElementById('litrosCombustivel').value);
    const valorLitro = parseFloat(document.getElementById('valorLitro').value);

    if (isNaN(kmPercorridos) || isNaN(litrosCombustivel) || isNaN(valorLitro) || nomeViagem === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const autonomia = kmPercorridos / litrosCombustivel;
    const valorViagem = litrosCombustivel * valorLitro;
    const valorPorKm = valorViagem / kmPercorridos;

    document.getElementById('resultado-nomeViagem').textContent = nomeViagem;
    document.getElementById('resultado-autonomia').textContent = autonomia.toFixed(2);
    document.getElementById('resultado-valorViagem').textContent = valorViagem.toFixed(2);
    document.getElementById('resultado-valorPorKm').textContent = valorPorKm.toFixed(2);
}
