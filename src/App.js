import "./App.css";
import Form from "./components/Form";
import getDate from "./components/Date";
import EducationInfo from "./components/EducationInfo";
import Job from "./components/JobInfo";
import React from "react";

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
    };
    this.setState = this.setState.bind(this);
  }
  render() {
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
  }
}

export default App;
