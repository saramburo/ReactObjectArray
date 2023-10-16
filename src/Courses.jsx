import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Courses({ setCoursesfn }) {
  const [course, setCourse] = useState({});
  const [universidad, setUniversidad] = useState();
  const [estudio, setEstudio] = useState();
  const [graduacion, setGraduacion] = useState();

  const handleUniversidadChange = (event) => {
    setUniversidad(event.target.value);
  };
  const handleEstudioChange = (event) => {
    setEstudio(event.target.value);
  };

  const handleGraduacionChange = (event) => {
    setGraduacion(event.target.value);
  };
  const handleAdd = (event) => {
    const uId = uuidv4();
    event.preventDefault();
    setCoursesfn({
      id: uId,
      university: universidad,
      titulo: estudio,
      fechaGraduacion: graduacion,
    });
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <div>
          <label>Universidad</label>
          <input type="text" onChange={handleUniversidadChange} />
        </div>
        <div>
          <label>Estudio</label>
          <input type="text" onChange={handleEstudioChange} />
        </div>
        <div>
          <label>Fecha Graduación</label>
          <input type="text" onChange={handleGraduacionChange} />
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
