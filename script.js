function calcularProduto() {
    let produto = 1;
    let i = 1;
    while (i <= 5) {
        produto *= i;
        i++;
    }
    alert('O produto dos números de 1 a 5 é: ' + produto);
}