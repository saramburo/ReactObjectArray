/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Info } from "./Info";
import { Container } from "./Container";
import { Experiences } from "./Experiences";
import { Courses } from "./Courses";

function App() {
  const [task, setTask] = useState();
  const [experiences, setExperiences]=useState([])
  const [courses, setCourses] = useState([]);

  const handleTaskChange = (value) => {
    setTask(value);
  };
  const handleCoursesChange = (edu) => {
    setCourses([...courses, edu]);
  };

  const handleExperiencesChange=(exp)=>{
    setExperiences([...experiences,exp])
  }

  const handleExperienceDelete=(id)=>{
    setExperiences((prev)=>{
    return prev.filter((experience)=>experience.id!==id)
  })}

  const handleCourseDeletion = (id) => {
    setCourses((prev) => {
      return prev.filter((course) => course.id !== id);
    });
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <h1>Pruebas Objetos y Arrays</h1>
      <Info setTaskfn={handleTaskChange} />
      <Courses setCoursesfn={handleCoursesChange} />
      <Experiences setExperiencefn={handleExperiencesChange} />
      <Container
        task={task}
        courses={courses}
        delCoursesfn={handleCourseDeletion}
        experiences={experiences}
      />
    </>
  );
}

export default App;
