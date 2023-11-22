import React, { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);
  function manejarClicBoton() {
    setValor(valor + 1);
  }
  return (
    <div className="text-center">
      <h1>Contador incrementa {valor} veces </h1>
      <button className="btn btn-dark" onClick={manejarClicBoton}>Incrementar</button>
    </div>
  );
}

export default Contador;
