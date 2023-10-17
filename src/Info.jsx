import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Info({ setInfofn }) {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBirthChange = (event) => {
    setBirth(event.target.value);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    const uId = uuidv4();
    setInfofn({
      id: uId,
      nombre: name,
      correo: mail,
      telefono: phone,
      nacimiento: birth,
    });
  };
  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <div>
            <label className="category-label">Name</label>
            <input
              className="category-details"
              onChange={handleNameChange}
              type="text"
              name="userName"
              required
            />
          </div>
          <div>
            <label className="category-label">Email</label>
            <input
              className="category-details"
              onChange={handleEmailChange}
              type="email"
              name="userEmail"
              required
            />
          </div>
          <div>
            <label className="category-label">Phone</label>
            <input
              className="category-details"
              onChange={handlePhoneChange}
              type="number"
              name="userPhone"
              required
            />
          </div>
          <div>
            <label className="category-label">Birth Date</label>
            <input
              className="category-details"
              onChange={handleBirthChange}
              type="date"
              name="userBirth"
              required
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
