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
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <div>
          <label className="category-label">University</label>
          <input
            className="category-details"
            type="text"
            onChange={handleUniversidadChange}
            required
          />
        </div>
        <div>
          <label className="category-label">Title of Study</label>
          <input
            className="category-details"
            type="text"
            onChange={handleEstudioChange}
            required
          />
        </div>
        <div>
          <label className="category-label">Graduation Date</label>
          <input
            className="category-details"
            type="date"
            onChange={handleGraduacionChange}
            required
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
