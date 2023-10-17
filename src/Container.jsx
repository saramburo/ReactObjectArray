import React, { useState } from "react";

export function Container({
  info,
  courses,
  delCoursesfn,
  experiences,
  delExperiencefn,
}) {
  const [editingInfo, setEditingInfo] = useState(false);
  const [editingCourse, setEditingCourse] = useState(false);
  const [editing, setEditing] = useState(false);
  const [course, setCourse] = useState("");
  const [universidad, setUniversidad] = useState();
  const [titulo, setTitulo] = useState();
  const [fecha, setFecha] = useState();

  //needs to be improved
  const handleEditing = () => {
    if (!editing) {
      setEditing(true);
    } else {
      setEditing(false);
    }
  };

  const handleEditingInfo = () => {
    if (!editingInfo) {
      setEditingInfo(true);
    } else {
      setEditingInfo(false);
    }
  };

  const handleEditingCourse = () => {
    if (!editingCourse) {
      setEditingCourse(true);
    } else {
      setEditingCourse(false);
    }
  };
  let viewMode = {};
  let editMode = {};

  let viewModeInfo = {};
  let editModeInfo = {};

  let viewModeCourse = {};
  let editModeCourse = {};

  //needs to be improved
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  if (editingInfo) {
    viewModeInfo.display = "none";
  } else {
    editModeInfo.display = "none";
  }

  if (editingCourse) {
    viewModeCourse.display = "none";
  } else {
    editModeCourse.display = "none";
  }
  return (
    <>
      <div className="container">
        <h2 className="content-header-title">Content</h2>
        <h2 className="content-title">Personal Information</h2>
        {info.map((data) => {
          return (
            <>
              <div key={data.id}>
                <div className="container-details">
                  <h3 className="container-detail-title">Name</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeInfo}
                  >
                    {data.nombre}
                  </p>
                  <input
                    defaultValue={data.nombre}
                    type="text"
                    style={editModeInfo}
                    onChange={(event) => (data.nombre = event.target.value)}
                  />
                </div>
                <div className="container-details">
                  <h3 className="container-detail-title">Email</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeInfo}
                  >
                    {data.correo}
                  </p>
                  <input
                    type="email"
                    style={editModeInfo}
                    defaultValue={data.correo}
                    onChange={(event) => (data.correo = event.target.value)}
                  />
                </div>
                <div className="container-details">
                  <h3 className="container-detail-title">Phone</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeInfo}
                  >
                    {data.telefono}
                  </p>
                  <input
                    defaultValue={data.telefono}
                    type="number"
                    style={editModeInfo}
                    onChange={(event) => (data.telefono = event.target.value)}
                  />
                </div>
                <div className="container-details">
                  <h3 className="container-detail-title">Birth Date</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeInfo}
                  >
                    {data.nacimiento}
                  </p>
                  <input
                    defaultValue={data.nacimiento}
                    type="date"
                    style={editModeInfo}
                    onChange={(event) => (data.nacimiento = event.target.value)}
                  />
                </div>
              </div>
              <button onClick={handleEditingInfo}>Edit</button>
            </>
          );
        })}
        <h2 className="content-title">Education</h2>
        {courses.map((course) => {
          return (
            <>
              <div key={course.id}>
                <div className="container-details">
                  <h3 className="container-detail-title">University</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeCourse}
                  >
                    {course.university}
                  </p>
                  <input
                    defaultValue={course.university}
                    type="text"
                    style={editModeCourse}
                    onChange={(event) => {
                      course.university = event.target.value;
                    }}
                  />
                </div>
                <div className="container-details">
                  <h3 className="container-detail-title">Title</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeCourse}
                  >
                    {course.titulo}
                  </p>
                  <input
                    defaultValue={course.titulo}
                    type="text"
                    style={editModeCourse}
                    onChange={(event) => {
                      course.titulo = event.target.value;
                    }}
                  />
                </div>
                <div className="container-details">
                  <h3 className="container-detail-title">Graduation Date</h3>
                  <p
                    className="container-detail-description"
                    style={viewModeCourse}
                  >
                    {course.fechaGraduacion}
                  </p>
                  <input
                    defaultValue={course.fechaGraduacion}
                    type="date"
                    style={editModeCourse}
                    onChange={(event) => {
                      course.fechaGraduacion = event.target.value;
                    }}
                  />
                </div>
                <button onClick={() => delCoursesfn(course.id)}>Delete</button>
                <button onClick={handleEditingCourse}>Edit</button>
              </div>
            </>
          );
        })}
        <div>
          <h2 className="content-title">Professional Experience</h2>
          {experiences.map((experience) => {
            return (
              <>
                <div key={experience.id}>
                  <div className="container-details">
                    <h3 className="container-detail-title">Company</h3>
                    <p
                      className="container-detail-description"
                      style={viewMode}
                    >
                      {experience.company}
                    </p>
                    <input
                      defaultValue={experience.company}
                      type="text"
                      style={editMode}
                      onChange={(event) => {
                        experience.company = event.target.value;
                      }}
                    />
                  </div>
                  <div className="container-details">
                    <h3 className="container-detail-title">Position</h3>
                    <p
                      className="container-detail-description"
                      style={viewMode}
                    >
                      {experience.position}
                    </p>
                    <input
                      defaultValue={experience.position}
                      type="text"
                      style={editMode}
                      onChange={(event) => {
                        experience.position = event.target.value;
                      }}
                    />
                  </div>
                  <div className="container-details">
                    <h3 className="container-detail-title">Start Date</h3>
                    <p
                      className="container-detail-description"
                      style={viewMode}
                    >
                      {experience.start}
                    </p>
                    <input
                      defaultValue={experience.start}
                      type="date"
                      style={editMode}
                      onChange={(event) => {
                        experience.start = event.target.value;
                      }}
                    />
                  </div>
                  <div className="container-details">
                    <h3 className="container-detail-title">End Date</h3>
                    <p
                      className="container-detail-description"
                      style={viewMode}
                    >
                      {experience.end}
                    </p>
                    <input
                      defaultValue={experience.end}
                      type="date"
                      style={editMode}
                      onChange={(event) => {
                        experience.end = event.target.value;
                      }}
                    />
                  </div>
                </div>
                <button onClick={() => delExperiencefn(experience.id)}>
                  Delete
                </button>
                <button onClick={handleEditing}>Edit</button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
