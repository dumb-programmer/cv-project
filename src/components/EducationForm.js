import React from "react";

const EducationForm = (props) => {
  const {
    educationList,
    maxDate,
    addBtnEvent,
    onSchoolNameChange,
    onDegreeChange,
    onStartDateChange,
    onEndDateChange,
  } = props;

  let inputs = [];
  for (let i = 0; i < educationList.length; i++) {
    inputs.push(
      <div className="education-form" data-index={i} key={educationList[i].id}>
        <label htmlFor="school-name">School Name:</label>
        <br></br>
        <input
          type="text"
          value={educationList[i].schoolName}
          onChange={onSchoolNameChange}
          id="school-name"
          maxLength="40"
          required
        ></input>
        <br></br>
        <label htmlFor="degree">Degree:</label>
        <br></br>
        <input
          type="text"
          value={educationList[i].degree}
          onChange={onDegreeChange}
          id="degree"
          maxLength="40"
          required
        ></input>
        <br></br>
        <label htmlFor="start-date">Start Date :</label>
        <br></br>
        <input
          type="date"
          max={maxDate}
          value={educationList[i].startDate}
          onChange={onStartDateChange}
          id="start-date"
          required
        ></input>
        <br></br>
        <label htmlFor="end-date">End Date :</label>
        <br></br>
        <input
          type="date"
          min={educationList[i].startDate}
          value={educationList[i].endDate}
          onChange={onEndDateChange}
          id="end-date"
          required
        ></input>
      </div>
    );
  }
  return (
    <div className="education-form">
      <h1>Education</h1>
      {inputs.map((input) => input)}
      <button id="add-education-form" type="button" onClick={addBtnEvent}>
        +
      </button>
    </div>
  );
};

export default EducationForm;
