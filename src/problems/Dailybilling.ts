import faturamentoMensal from "../data/faturamentoMensal.json";

interface Faturamento {
  dia: number;
  valor: number;
}

export const analisarFaturamento = (): {
  menorValor: number;
  maiorValor: number;
  diasAcimaMedia: number;
} => {
  const dados = faturamentoMensal as Faturamento[];
  const diasComFaturamento = dados.filter((dado) => dado.valor > 0);

  const menorValor = Math.min(...diasComFaturamento.map((dado) => dado.valor));
  const maiorValor = Math.max(...diasComFaturamento.map((dado) => dado.valor));
  const mediaMensal =
    diasComFaturamento.reduce((acc, dado) => acc + dado.valor, 0) /
    diasComFaturamento.length;

  const diasAcimaMedia = diasComFaturamento.filter(
    (dado) => dado.valor > mediaMensal
  ).length;

  return { menorValor, maiorValor, diasAcimaMedia };
};
