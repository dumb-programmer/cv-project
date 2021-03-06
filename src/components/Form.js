import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import Job from "./JobInfo.js";
import JobForm from "./JobForm";
import "../styles/Form.css";

class Form extends React.Component {
  onNameChange = (e) => {
    this.props.setState({
      generalInfo: {
        name: e.target.value,
        email: this.props.generalInfo.email,
        phone: this.props.generalInfo.phone,
      },
    });
  };

  onEmailChange = (e) => {
    this.props.setState({
      generalInfo: {
        name: this.props.generalInfo.name,
        email: e.target.value,
        phone: this.props.generalInfo.phone,
      },
    });
  };

  onPhoneChange = (e) => {
    this.props.setState({
      generalInfo: {
        name: this.props.generalInfo.name,
        email: this.props.generalInfo.email,
        phone: e.target.value,
      },
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.setState({
      formToggle: false,
    });
  };

  addEducationForm = () => {
    this.props.setState({
      educationList: [...this.props.educationList, new EducationInfo()],
    });
  };

  updateState = () => {
    this.props.setState({
      generalInfo: this.props.generalInfo,
      educationList: this.props.educationList,
      jobList: this.props.jobsList,
      todayDate: this.props.todayDate,
      formToggle: true,
    });
  };

  onSchoolNameChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.educationList[index].setSchoolName(e.target.value);
    this.updateState();
  };

  onDegreeChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.educationList[index].setDegree(e.target.value);
    this.updateState();
  };

  onEducationStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.educationList[index].setStartDate(e.target.value);
    this.updateState();
  };

  onEducationEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.educationList[index].setEndDate(e.target.value);
    this.updateState();
  };

  addJobForm = () => {
    this.props.setState({
      jobsList: [...this.props.jobsList, new Job()],
    });
  };

  onJobTitleChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.jobsList[index].setTitle(e.target.value);
    this.updateState();
  };

  onCompanyChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.jobsList[index].setCompany(e.target.value);
    this.updateState();
  };

  onJobStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.jobsList[index].setStartDate(e.target.value);
    this.updateState();
  };

  onJobEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.props.jobsList[index].setEndDate(e.target.value);
    this.updateState();
  };

  render() {
    const { generalInfo, educationList, jobsList, todayDate } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={this.formSubmit}>
          <GeneralInfo
            generalInfo={generalInfo}
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
            onPhoneChange={this.onPhoneChange}
          />
          <EducationForm
            educationList={educationList}
            maxDate={todayDate}
            addBtnEvent={this.addEducationForm}
            onSchoolNameChange={this.onSchoolNameChange}
            onDegreeChange={this.onDegreeChange}
            onStartDateChange={this.onEducationStartDateChange}
            onEndDateChange={this.onEducationEndDateChange}
          />
          <JobForm
            jobsList={jobsList}
            maxDate={todayDate}
            addBtnEvent={this.addJobForm}
            onTitleChange={this.onJobTitleChange}
            onCompanyChange={this.onCompanyChange}
            onStartDateChange={this.onJobStartDateChange}
            onEndDateChange={this.onJobEndDateChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
