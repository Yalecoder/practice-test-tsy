import React from "react";
import { analisarFaturamento } from "../problems/Dailybilling";

// Função para formatar números com separador de milhar e duas casas decimais
const formatarNumero = (numero: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numero);
};

const DailyBilling: React.FC = () => {
  const { menorValor, maiorValor, diasAcimaMedia } = analisarFaturamento();

  return (
    <div>
      <p>
        (3) Dado um vetor que guarda o valor de faturamento diário de uma
        distribuidora, faça um programa, na linguagem que desejar, que calcule e
        retorne:
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            padding: "20px",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#531CB3",
          }}
        >
          <h3>Menor Faturamento</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {formatarNumero(menorValor)}
          </p>
        </div>
        <div
          style={{
            borderRadius: "8px",
            padding: "20px",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#531CB3",
          }}
        >
          <h3>Maior Faturamento</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {formatarNumero(maiorValor)}
          </p>
        </div>
        <div
          style={{
            borderRadius: "8px",
            padding: "20px",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#531CB3",
          }}
        >
          <h3>Dias Acima da Média</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {diasAcimaMedia}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyBilling;
