import React from "react";
import { calcularPercentualPorEstado } from "../problems/Monthlybilling";

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const Monthlybilling: React.FC = () => {
  const percentuais = calcularPercentualPorEstado(faturamento);

  return (
    <div>
      <p>(2) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado (%):</p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {percentuais.map(({ estado, percentual }) => (
          <div
            key={estado}
            style={{
              backgroundColor: "#531CB3",
              color: "#fff",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>{estado}</h3>
            <p style={{ margin: "10px 0 0", fontSize: "18px" }}>
              <strong>{percentual.toFixed(2)}%</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monthlybilling;
