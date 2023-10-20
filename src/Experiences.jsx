import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Experiences({ setExperiencefn }) {
  const [empresa, setEmpresa] = useState();
  const [cargo, setCargo] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [experiencia, setExperiencia] = useState({});

  const handleEmpresaChange = (event) => {
    setEmpresa(event.target.value);
  };
  const handlePositionChange = (event) => {
    setCargo(event.target.value);
  };
  const handleStartDate = (event) => {
    setFechaInicio(event.target.value);
  };
  const handleEndDate = (event) => {
    setFechaFin(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const uId = uuidv4();

    setExperiencefn({
      id: uId,
      company: empresa,
      position: cargo,
      start: fechaInicio,
      end: fechaFin,
    });
    event.target.reset();
  };
  return (
    <>
      <form onSubmit={handleAdd}>
        <div className="subcontainer">
          <div>
            <label className="category-label">Company</label>
            <input
              className="category-details"
              type="text"
              onChange={handleEmpresaChange}
              required
            />
          </div>
          <div>
            <label className="category-label">Position</label>
            <input
              className="category-details"
              type="text"
              onChange={handlePositionChange}
              required
            />
          </div>
          <div>
            <label className="category-label">Start Date</label>
            <input
              className="category-details"
              type="date"
              onChange={handleStartDate}
              required
            />
          </div>
          <div>
            <label className="category-label">End Date</label>
            <input
              className="category-details"
              type="date"
              onChange={handleEndDate}
              required
            />
          </div>
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
