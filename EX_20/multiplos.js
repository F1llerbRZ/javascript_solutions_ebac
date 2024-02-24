function somaMultiplos(num1, num2, limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) {
      if (i % num1 === 0 || i % num2 === 0) {
        soma += i;
      }
    }
    return soma;
  }
  
  // Entrada de Dados (exemplos)
  const num1 = 5;
  const num2 = 7;
  const limite = 1000;
  const total = somaMultiplos(num1, num2, limite);
  console.log(`Soma dos múltiplos de ${num1} e ${num2} abaixo de ${limite}: ${total}`);
  