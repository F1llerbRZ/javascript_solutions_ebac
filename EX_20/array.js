function findMinMaxIndex(arr) {
    const minIndex = arr.indexOf(Math.min(...arr));
    const maxIndex = arr.indexOf(Math.max(...arr));
    return { minIndex, maxIndex };
  }
  
  // Entrada de Dados (exemplos)
  const arr = [10, 4, 2, 9, 7, 1, 5, 3, 6, 8];
  const { minIndex, maxIndex } = findMinMaxIndex(arr);
  console.log(`Índice do menor valor: ${minIndex}`); // Saída: 2
  console.log(`Índice do maior valor: ${maxIndex}`); // Saída: 0
  