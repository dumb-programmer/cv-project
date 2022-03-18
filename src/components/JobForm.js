import React from "react";

const JobForm = (props) => {
  const {
    jobsList,
    maxDate,
    addBtnEvent,
    onTitleChange,
    onCompanyChange,
    onStartDateChange,
    onEndDateChange,
  } = props;

  let inputs = [];
  for (let i = 0; i < jobsList.length; i++) {
    inputs.push(
      <div className="job-form" data-index={i} key={jobsList[i].id}>
        <label htmlFor="job-title">Job Title:</label>
        <br></br>
        <input
          type="text"
          value={jobsList[i].title}
          onChange={onTitleChange}
          id="job-title"
          maxLength="40"
          required
        ></input>
        <br></br>
        <label htmlFor="company">Company:</label>
        <br></br>
        <input
          type="text"
          value={jobsList[i].company}
          onChange={onCompanyChange}
          id="company"
          maxLength="40"
          required
        ></input>
        <br></br>
        <label htmlFor="start-date">Start Date :</label>
        <br></br>
        <input
          type="date"
          max={maxDate}
          value={jobsList[i].startDate}
          onChange={onStartDateChange}
          id="start-date"
          required
        ></input>
        <br></br>
        <label htmlFor="end-date">End Date :</label>
        <br></br>
        <input
          type="date"
          value={jobsList[i].endDate}
          min={jobsList[i].startDate}
          onChange={onEndDateChange}
          id="end-date"
          required
        ></input>
      </div>
    );
  }
  return (
    <div className="job-form">
      <h1>Job Experience</h1>
      {inputs.map((input) => input)}
      <button id="add-job-form" type="button" onClick={addBtnEvent}>
        +
      </button>
    </div>
  );
};

export default JobForm;
