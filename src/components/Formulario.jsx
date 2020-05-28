import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Formulario = ({ createCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    sintomas: ""
  });

  const [error, setError] = useState(false);

  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const { mascota, propietario, fecha, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    cita.id = uuid();
    setError(false);
    createCita(cita);
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Ingrese nombre de la mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Propietario de la mascota</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Ingrese nombre del propietario de la mascota"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  createCita: PropTypes.func.isRequired
};

export default Formulario;
