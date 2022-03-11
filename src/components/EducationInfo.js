import uniqid from "uniqid";

class EducationInfo {
  constructor(schoolName = "", degree = "", startDate = "", endDate = "") {
    this.id = uniqid();
    this.schoolName = schoolName;
    this.degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  setSchoolName(schoolName) {
    this.schoolName = schoolName;
  }

  setDegree(degree) {
    this.degree = degree;
  }

  setStartDate(startDate) {
    this.startDate = startDate;
  }

  setEndDate(endDate) {
    this.endDate = endDate;
  }
}

export default EducationInfo;
