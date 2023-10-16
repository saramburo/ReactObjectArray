import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Info } from "./Info";
import { Container } from "./Container";

import { Courses } from "./Courses";

function App() {
  const [task, setTask] = useState();

  const [courses, setCourses] = useState([]);

  const handleTaskChange = (value) => {
    setTask(value);
  };
  const handleCoursesChange = (edu) => {
    setCourses([...courses, edu]);
  };

  const handleCourseDeletion = (id) => {
    setCourses((prev) => {
      return prev.filter((course) => course.id !== id);
    });
  };
  return (
    <>
      <h1>Pruebas Objetos y Arrays</h1>
      <Info setTaskfn={handleTaskChange} />
      <Courses setCoursesfn={handleCoursesChange} />
      <Container
        task={task}
        courses={courses}
        delCoursesfn={handleCourseDeletion}
      />
    </>
  );
}

export default App;
