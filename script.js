function IMC() {
    // Obtemos os valores inseridos no formulário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let result = peso / (altura**2);

    // Exibimos o resultado
    document.getElementById('result').textContent = result.toFixed(2);
}
