export const pertenceFibonacci = (numero: number): boolean => {
    if (numero < 0) return false;
  
    let a = 0;
    let b = 1;
  
    while (b < numero) {
      const temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === numero || a === numero;
  };
  