// problems/Sum.ts
export const calcularSomaIncremental = (indice: number): number => {
  let soma = 0;
  let k = 0;

  // Loop para calcular a soma incremental
  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  return soma;
};
