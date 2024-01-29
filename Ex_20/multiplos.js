function somaDosMultiplos(n) {
    let soma = 0;
    for (let i = 0; i < n; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i;
      }
    }
    return soma;
  }
  
  console.log(somaDosMultiplos(1000));
  
  