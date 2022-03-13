import "./styles/App.css";
import React from "react";
import Form from "./components/Form";
import getDate from "./components/Date";
import EducationInfo from "./components/EducationInfo";
import Job from "./components/JobInfo";
import CV from "./components/CV";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      educationList: [new EducationInfo()],
      jobsList: [new Job()],
      todayDate: getDate(),
      formToggle: true,
    };
    this.setState = this.setState.bind(this);
  }
  render() {
    if (this.state.formToggle) {
      return (
        <div className="App">
          <Form
            generalInfo={this.state.generalInfo}
            educationList={this.state.educationList}
            jobsList={this.state.jobsList}
            todayDate={this.state.todayDate}
            setState={this.setState}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <CV
            generalInfo={this.state.generalInfo}
            educationList={this.state.educationList}
            jobsList={this.state.jobsList}
          />
        </div>
      );
    }
  }
}

export default App;
