import React from "react";
import uniqid from "uniqid";
import "../styles/CV.css";

const CV = (props) => {
  const { generalInfo, educationList, jobsList, setFormToggle } = props;
  const onBtnClick = () => {
    setFormToggle(true);
  };
  return (
    <div className="grid-container">
      <aside>
        <h1>{generalInfo.name}</h1>
        <h2>Personal Info</h2>
        <b>
          <p>Email</p>
        </b>
        <p className="small-text">{generalInfo.email}</p>
        <b>
          <p>Phone</p>
        </b>
        <p className="small-text">{generalInfo.phone}</p>
      </aside>
      <main>
        <div className="main-content">
          <div className="education-info" key={uniqid()}>
            <h1>Education</h1>
            {educationList.map((education) => {
              return (
                <div key={uniqid()}>
                  <h2>{education.schoolName}</h2>
                  <p>{education.degree}</p>
                  <p>
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="job-info">
            <h1>Job Experience</h1>
            {jobsList.map((job) => {
              return (
                <div key={uniqid()}>
                  <h2>{job.company}</h2>
                  <p>{job.title}</p>
                  <p>
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={onBtnClick} id="edit-cv-btn"></button>
      </main>
    </div>
  );
};

export default CV;
