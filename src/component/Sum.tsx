import React, { useState } from "react";
import { calcularSomaIncremental } from "../problems/Sum";

const Sum: React.FC = () => {
  // Estado para o índice, inicializado com o valor padrão de 13
  const [indice, setIndice] = useState<number>(13);

  // Função para atualizar o índice
  const handleIndiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndice(Number(e.target.value));
  };

  // Resultado da soma incremental com o índice atualizado
  const resultado = calcularSomaIncremental(indice);

  return (
    <div>
      <p>
        (1) Observe o trecho de código abaixo: int INDICE = {indice}, SOMA = 0,
        K = 0
      </p>

      <p>Enquanto K INDICE faça K = K + 1; SOMA = SOMA + K; Imprimir(SOMA)</p>

      <p>Ao final do processamento, qual será o valor da variável SOMA?</p>

      {/* Campo de input para o usuário alterar o índice */}
      <div>
        <label>
          Informe o valor de INDICE:
          <input
            type="number"
            value={indice}
            onChange={handleIndiceChange}
            // min="1"
            style={{ marginLeft: "10px", padding: "5px", width: "100px" }}
          />
        </label>
      </div>

      <p>
        Resultado da soma incremental: <strong>{resultado}</strong>
      </p>
    </div>
  );
};

export default Sum;
