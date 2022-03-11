import uniqid from "uniqid";

class Job {
  constructor(title = "", company = "", startDate = "", endDate = "") {
    this.id = uniqid();
    this.title = title;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  setTitle(title) {
    this.title = title;
  }

  setCompany(company) {
    this.company = company;
  }

  setStartDate(startDate) {
    this.startDate = startDate;
  }

  setEndDate(endDate) {
    this.endDate = endDate;
  }
}

export default Job;
