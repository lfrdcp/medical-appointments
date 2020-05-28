import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, deleteCita }) => (
  <div className="cita">
    <p>
      Mascota: <span>{cita.mascota}</span>
    </p>
    <p>
      Propietario: <span>{cita.propietario}</span>
    </p>
    <p>
      Fecha: <span>{cita.fecha}</span>
    </p>
    <p>
      Síntomas: <span>{cita.sintomas}</span>
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => deleteCita(cita.id)}
    >
      Eliminar cita &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired
};

export default Cita;
