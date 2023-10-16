import React, { useState } from "react";

export function Info({ setTaskfn }) {
  const [task, setTask] = useState("");
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    setTaskfn(task);
  };
  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <input onChange={handleTaskChange} type="text" name="input" />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
