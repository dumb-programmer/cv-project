import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationForm from "./EducationForm";
import EducationInfo from "./EducationInfo";
import Job from "./JobInfo.js";
import JobForm from "./JobForm";
import getDate from "./Date";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      educationList: [
        new EducationInfo(),
      ],
      jobList: [
        new Job(),
      ],
      todayDate: getDate(),
    };
  }

  onNameChange = (e) => {
    this.setState({
      generalInfo: {
        name: e.target.value,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
      },
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: e.target.value,
        phone: this.state.generalInfo.phone,
      },
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onPhoneChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: e.target.value,
      },
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
  };

  addEducationForm = (e) => {
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: [...this.state.educationList, new EducationInfo()],
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onSchoolNameChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.educationList[index].setSchoolName(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onDegreeChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.educationList[index].setDegree(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onEducationStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.educationList[index].setStartDate(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onEducationEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.educationList[index].setEndDate(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  addJobForm = (e) => {
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: [...this.state.jobList, new Job()],
      todayDate: this.state.todayDate,
    });
  };

  onJobTitleChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.jobList[index].setTitle(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onCompanyChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.jobList[index].setCompany(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onJobStartDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.jobList[index].setStartDate(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  onJobEndDateChange = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    this.state.jobList[index].setEndDate(e.target.value);
    this.setState({
      generalInfo: this.state.generalInfo,
      educationList: this.state.educationList,
      jobList: this.state.jobList,
      todayDate: this.state.todayDate,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <GeneralInfo
            generalInfo={this.state.generalInfo}
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
            onPhoneChange={this.onPhoneChange}
          />
          <EducationForm
            educationList={this.state.educationList}
            maxDate={this.state.todayDate}
            addBtnEvent={this.addEducationForm}
            onSchoolNameChange={this.onSchoolNameChange}
            onDegreeChange={this.onDegreeChange}
            onStartDateChange={this.onEducationStartDateChange}
            onEndDateChange={this.onEducationEndDateChange}
          />
          <JobForm
            jobList={this.state.jobList}
            maxDate={this.state.todayDate}
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
