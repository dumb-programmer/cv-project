import "./styles/App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import getDate from "./components/Date";
import EducationInfo from "./components/EducationInfo";
import Job from "./components/JobInfo";
import CV from "./components/CV";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationList, setEducationList] = useState([new EducationInfo()]);
  const [jobsList, setJobsList] = useState([new Job()]);
  const [formToggle, setFormToggle] = useState(true);

  if (formToggle) {
    return (
      <div className="App">
        <Form
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          educationList={educationList}
          setEducationList={setEducationList}
          jobsList={jobsList}
          setJobsList={setJobsList}
          todayDate={getDate()}
          setFormToggle={setFormToggle}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <CV
          generalInfo={generalInfo}
          educationList={educationList}
          jobsList={jobsList}
          setFormToggle={setFormToggle}
        />
      </div>
    );
  }
};

export default App;
