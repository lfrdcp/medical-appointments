import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const createCita = cita => {
    setCitas([...citas, cita]);
  };

  const deleteCita = id => {
    const newCitas = citas.filter(cita => id !== cita.id);
    setCitas(newCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <div className="App">
        <h1>Administrador de pacientes por Alfredo Castañeda P</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario createCita={createCita} />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
