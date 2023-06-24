import React, { useState } from "react";

export const Tres = () => {
  const [mensaje, setMensaje] = useState("");
  const alerta = () => {
    let mensaje = "Enviando mail a Gambaudo....";
    setMensaje(mensaje);
  };
  return (
    <>
      <div className="contenedor-boton">
        <h1 className="botoncito">El botón Rojo</h1>
        <input
          className="boton-rojo"
          type="button"
          value="ALERT"
          onClick={alerta}
        />
        {mensaje != "" && <h1 className="panico">{mensaje}</h1>}
      </div>
    </>
  );
};
