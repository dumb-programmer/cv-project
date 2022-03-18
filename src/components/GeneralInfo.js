import React from "react";

const GeneralInfo = (props) => {
  const { generalInfo, onNameChange, onEmailChange, onPhoneChange } = props;
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
      <input type="tel" value={phone} onChange={onPhoneChange} required></input>
    </div>
  );
};

export default GeneralInfo;
