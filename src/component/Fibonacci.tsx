import React, { useState } from "react";
import { pertenceFibonacci } from "../problems/Fibonacci";

const Fibonacci: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [resultado, setResultado] = useState<string>("");

  const handleCheck = () => {
    setResultado(pertenceFibonacci(numero) ? "Pertence" : "Não pertence");
  };

  return (
    <div>
      <p>
        (2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
        valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2,
        3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar
        onde, informado um número, ele calcule a sequência de Fibonacci e
        retorne uma mensagem avisando se o número informado pertence ou não a
        sequência.
      </p>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Digite um número"
        style={{ padding: 10 }}
      />
      <button
        onClick={handleCheck}
        style={{ background: "rgb(0, 123, 255)", marginLeft: 10 }}
      >
        Verificar
      </button>
      <p>
        Resultado: <strong>{resultado}</strong>
      </p>
    </div>
  );
};

export default Fibonacci;
