import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

export function Experiences({setExperiencefn}){
    const [empresa, setEmpresa]=useState();
    const [cargo, setCargo]=useState();
    const [fechaInicio, setFechaInicio]=useState();
    const [fechaFin, setFechaFin]=useState()
    const [experiencia, setExperiencia]=useState({})

    const handleEmpresaChange=(event)=>{
        setEmpresa(event.target.value);
    }
    const handleCargoChange=(event)=>{
        setCargo(event.target.value);
    }
    const handleFechaInicio=(event)=>{
        setFechaInicio(event.target.value)
    }
    const handleFechaFin=(event)=>{
        setFechaFin(event.target.value)
    }

    const handleAdd=(event)=>{
        event.preventDefault();
        const uId=uuidv4();
        setExperiencefn({
                id:uId,
                company:empresa,
                position:cargo,
                start:fechaInicio,
                end:fechaFin});
    }
    return (
      <>
        <form onSubmit={handleAdd}>
          <div className="subcontainer">
            <div>
              <label>Empresa</label>
              <input type="text" onChange={handleEmpresaChange} />
            </div>
          </div>
          <button>Add</button>
        </form>
      </>
    );

}