import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import Job from "./JobInfo.js";
import JobForm from "./JobForm";
import "../styles/Form.css";

const Form = (props) => {
  const {
    generalInfo,
    setGeneralInfo,
    educationList,
    setEducationList,
    jobsList,
    setJobsList,
    todayDate,
    setFormToggle,
  } = props;

  const onNameChange = (e) => {
    setGeneralInfo((prevState) => {
      return {
        name: e.target.value,
        email: prevState.email,
        phone: prevState.phone,
      };
    });
  };

  const onEmailChange = (e) => {
    setGeneralInfo((prevState) => {
      return {
        name: prevState.name,
        email: e.target.value,
        phone: prevState.phone,
      };
    });
  };

  const onPhoneChange = (e) => {
    setGeneralInfo((prevState) => {
      return {
        name: prevState.name,
        email: prevState.email,
        phone: e.target.value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setFormToggle(false);
  };

  const addEducationForm = () => {
    setEducationList((prevState) => [...prevState, new EducationInfo()]);
  };

  const onSchoolNameChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    educationList[index].setSchoolName(e.target.value);
    setEducationList((prevState) => [...prevState]);
  };

  const onDegreeChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    educationList[index].setDegree(e.target.value);
    setEducationList((prevState) => [...prevState]);
  };

  const onEducationStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    props.educationList[index].setStartDate(e.target.value);
    setEducationList((prevState) => [...prevState]);
  };

  const onEducationEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    props.educationList[index].setEndDate(e.target.value);
    setEducationList((prevState) => [...prevState]);
  };

  const addJobForm = () => {
    setJobsList((prevState) => [...prevState, new Job()]);
  };

  const onJobTitleChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    jobsList[index].setTitle(e.target.value);
    setJobsList((prevState) => [...prevState]);
  };

  const onCompanyChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    jobsList[index].setCompany(e.target.value);
    setJobsList((prevState) => [...prevState]);
  };

  const onJobStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    jobsList[index].setStartDate(e.target.value);
    setJobsList((prevState) => [...prevState]);
  };

  const onJobEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    jobsList[index].setEndDate(e.target.value);
    setJobsList((prevState) => [...prevState]);
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmit}>
        <GeneralInfo
          generalInfo={generalInfo}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onPhoneChange={onPhoneChange}
        />
        <EducationForm
          educationList={educationList}
          maxDate={todayDate}
          addBtnEvent={addEducationForm}
          onSchoolNameChange={onSchoolNameChange}
          onDegreeChange={onDegreeChange}
          onStartDateChange={onEducationStartDateChange}
          onEndDateChange={onEducationEndDateChange}
        />
        <JobForm
          jobsList={jobsList}
          maxDate={todayDate}
          addBtnEvent={addJobForm}
          onTitleChange={onJobTitleChange}
          onCompanyChange={onCompanyChange}
          onStartDateChange={onJobStartDateChange}
          onEndDateChange={onJobEndDateChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
