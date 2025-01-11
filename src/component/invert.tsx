import React, { useState } from "react";
import { inverterString } from "../problems/invert";

const invert: React.FC = () => {
  const [texto, setTexto] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const handleInvert = () => {
    setResultado(inverterString(texto));
  };

  return (
    <div>
      <h2>(5) Inverter os caracteres de um string:</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite um texto"
        style={{padding: 10}}

      />
      <button onClick={handleInvert} style={{ background: "rgb(0, 123, 255)", marginLeft: 10 }}>Inverter</button>
      <p>Texto invertido: <strong>{resultado}</strong></p>
    </div>
  );
};

export default invert;
