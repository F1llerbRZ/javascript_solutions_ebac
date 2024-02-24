function mdcDivisores(a, b) {
    let divisor = Math.min(a, b);
    while (divisor > 0) {
    if (a % divisor === 0 && b % divisor === 0) {
        return divisor;
}
divisor--;
    }
    return 1;
}

// Entrada de Dados
console.log(mdcDivisores(10, 16)); 
console.log(mdcDivisores(20, 12)); 