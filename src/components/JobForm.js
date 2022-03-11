import React from "react";

class JobForm extends React.Component {
  render() {
    const {
      jobList,
      maxDate,
      addBtnEvent,
      onTitleChange,
      onCompanyChange,
      onStartDateChange,
      onEndDateChange,
    } = this.props;
    let inputs = [];
    for (let i = 0; i < jobList.length; i++) {
      inputs.push(
        <div className="job-form" data-index={i} key={jobList[i].id}>
          <label htmlFor="job-title">Job Title:</label>
          <br></br>
          <input
            type="text"
            value={jobList[i].title}
            onChange={onTitleChange}
            id="job-title"
            maxLength="40"
          ></input>
          <br></br>
          <label htmlFor="company">Company:</label>
          <br></br>
          <input
            type="text"
            value={jobList[i].company}
            onChange={onCompanyChange}
            id="company"
            maxLength="40"
          ></input>
          <br></br>
          <label htmlFor="start-date">Start Date :</label>
          <br></br>
          <input
            type="date"
            max={maxDate}
            value={jobList[i].startDate}
            onChange={onStartDateChange}
            id="start-date"
          ></input>
          <br></br>
          <label htmlFor="end-date">End Date :</label>
          <br></br>
          <input
            type="date"
            value={jobList[i].endDate}
            min={jobList[i].startDate}
            onChange={onEndDateChange}
            id="end-date"
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
  }
}

export default JobForm;
