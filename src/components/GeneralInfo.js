import React from "react";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { generalInfo, onNameChange, onEmailChange, onPhoneChange } =
      this.props;
    const { name, email, phone } = generalInfo;
    return (
      <div className="general-info">
        <h1>General Information</h1>
        <label htmlFor="name">Name : </label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          maxLength="30"
          required
        ></input>
        <br></br>
        <label htmlFor="email">Email : </label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          required
        ></input>
        <br></br>
        <label htmlFor="phone">Phone : </label>
        <br></br>
        <input
          type="text"
          value={phone}
          onChange={onPhoneChange}
          required
        ></input>
      </div>
    );
  }
}

export default GeneralInfo;
