export const inverterString = (texto: string): string => {
    let invertida = "";
  
    for (let i = texto.length - 1; i >= 0; i--) {
      invertida += texto[i];
    }
  
    return invertida;
  };
  