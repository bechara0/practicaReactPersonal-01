import React from "react";

export const Uno = ({ datos, hijo }) => {
  return (
    <div>
      <h1>Primer componente en la práctica React</h1>
      <h3>
        Nombre y apellido: {datos.nombre} {datos.apellido}
      </h3>
      <h5>Profesión: {datos.profesion}</h5>
      <h5>Edad: {datos.edad} años</h5>
      <img className='bruno' src={hijo}></img>
    </div>
  );
};
