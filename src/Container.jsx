import React, { useState } from "react";

export function Container({ task, courses, delCoursesfn }) {
  const [editing, setEditing] = useState(false);
  const [course, setCourse] = useState("");
  const [universidad,setUniversidad]=useState();
  const [titulo,setTitulo]=useState();
  const [fecha, setFecha]=useState();
  const handleEditing = () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <>
      <div className="container">
        <p>{task}</p>
        {courses.map((course) => {
          return (
            <>
              <div key={course.id}>
                <div className="container-details">
                  <h3>University</h3>
                  <p style={viewMode}>{course.university}</p>
                  <input
                    type="text"
                    style={editMode}
                    onChange={(event) => {course.university=event.target.value}}
                  />
                </div>
                <div className="container-details">
                  <h3>Title</h3>
                  <p style={viewMode}>{course.titulo}</p>
                  <input
                    type="text"
                    style={editMode}
                    onChange={(event) => {course.titulo=event.target.value}}
                  />
                </div>
                <div className="container-details">
                  <h3>Graduation Date</h3>
                  <p style={viewMode}>{course.fechaGraduacion}</p>
                  <input
                    type="text"
                    style={editMode}
                    onChange={(event) => {course.fechaGraduacion=event.target.value}}
                  />
                </div>
                <button onClick={() => delCoursesfn(course.id)}>Delete</button>
                <button onClick={handleEditing}>Edit</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
