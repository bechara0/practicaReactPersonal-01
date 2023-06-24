import React, { useState } from "react";

export const Dos = () => {
  const [datos, setDatos] = useState({
    // nombre: "",
    // apellido: "",
    // profesion: "",
    // edad: 0,
  });
  const tomarDatos = (e) => {
    e.preventDefault();
    let { nombre, apellido, profesion, edad } = e.target;
    let datos = {
      nombre: nombre.value,
      apellido: apellido.value,
      profesion: profesion.value,
      edad: parseInt(edad.value),
    };

    setDatos(datos);
  };
  return (
    <div>
      <form className="formulario" onSubmit={tomarDatos}>
        <input type="text" name="nombre" placeholder="Ingrese nombre" />
        <input type="text" name="apellido" placeholder="Ingrese apellido" />
        <input type="text" name="profesion" placeholder="Ingrese profesión" />
        <input type="number" name="edad" placeholder="Ingrese su edad" />
        <input type="submit" value="enviar" />
      </form>
      <div>
        {datos.edad > 0 && (
          <ul>
            <li>Nombre: {datos.nombre}</li>
            <li>Apellido: {datos.apellido}</li>
            <li>Profesión: {datos.profesion}</li>
            <li>Edad: {datos.edad} años</li>
          </ul>
        )}
      </div>
    </div>
  );
};
