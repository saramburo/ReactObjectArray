/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./App.css";
import { Info } from "./Info";
import { Container } from "./Container";
import { Experiences } from "./Experiences";
import { Courses } from "./Courses";

function App() {
  const [info, setInfo] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [courses, setCourses] = useState([]);

  const handleInfoChange = (pInfo) => {
    setInfo([pInfo]);
  };
  const handleCoursesChange = (edu) => {
    setCourses([...courses, edu]);
  };

  const handleExperiencesChange = (exp) => {
    setExperiences([...experiences, exp]);
  };

  const handleExperienceDeletion = (id) => {
    setExperiences((prev) => {
      return prev.filter((experience) => experience.id !== id);
    });
  };

  const handleCourseDeletion = (id) => {
    setCourses((prev) => {
      return prev.filter((course) => course.id !== id);
    });
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <h1>CV Application</h1>
      <div className="main">
        <div className="main-section">
          <h2 className="content-header-title">Sections</h2>
          <h2 className="content-title">Personal Information</h2>
          <Info setInfofn={handleInfoChange} />
          <h2 className="content-title">Education</h2>
          <Courses setCoursesfn={handleCoursesChange} />
          <h2 className="content-title">Professional Experience</h2>
          <Experiences setExperiencefn={handleExperiencesChange} />
        </div>
        <div className="container">
          <Container
            info={info}
            courses={courses}
            delCoursesfn={handleCourseDeletion}
            delExperiencefn={handleExperienceDeletion}
            experiences={experiences}
          />
        </div>
      </div>
    </>
  );
}

export default App;
