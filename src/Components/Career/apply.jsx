import { useEffect, useState } from "react";
import "./apply.css";
import Dotted from "../../assets/Ellips-e.png";
import Share from "../../assets/Vec-s.png";
import Info from "../../assets/vec-i.png";
import { FaRegBookmark } from "react-icons/fa6";
import orive_logo from "../../assets/fade-logo.png";
import "./career.css";
import arrow from "../../assets/arrow.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { Api } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import './Career'
import { text } from "@fortawesome/fontawesome-svg-core";
import Swal from 'sweetalert2'

const Career = ({ setOkModalOpen, getCard }) => {
  // const nav = useNavigate();

  const [job, setJob] = useState([]);

  const getJob = async () => {
    const result = await Api.getJob();
    console.log("rec", result);
    setJob(result);
  };

  useEffect(() => {
    getJob();
  }, []);


const handleConfirmClick =() =>{
  Swal.fire({
    confirmButtonColor: "#f76c24", title:'Success', 
  
    text: 'Your Form Has been Submitted Successfully!', icon:'success'})
}

  const jobData = [
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "Software Development Engineer",
      subRole: "Software Engineer",
      projectRole: "Software Development Engineer Project",
      businessArea: "Technology",
      posted: "1 day",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "Quality Engineer(Tester)",
      subRole: "Quality Engineer(Tester)",
      projectRole: "Quality Engineer Project",
      businessArea: "Technology",
      posted: "1 day",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "UI/UX Designer",
      subRole: "Software Engineer",
      projectRole: "UI/UX Designer",
      businessArea: "Technology",
      posted: "2 days",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "Software Development Engineer",
      subRole: "Software Engineer",
      projectRole: "Software Development Engineer Project",
      businessArea: "Technology",
      posted: "1 day",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "Software Development Engineer",
      subRole: "Software Engineer",
      projectRole: "Software Development Engineer Project",
      businessArea: "Technology",
      posted: "1 day",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
    {
      country: "INDIA",
      city: "BHUBANESWAR",
      role: "Software Development Engineer",
      subRole: "Software Engineer",
      projectRole: "Software Development Engineer Project",
      businessArea: "Technology",
      posted: "1 day",
      jobNo: "ATCI-4143163-S1615529",
      designation: "FULL-TIME",
      projectRoleDesc:
        "Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.",
      mustHaveSkills: "SAP Business Objects Data Services",
      goodHaveSkills:
        "Life Sciences Minimum 5 year(s) of experience is required",
      qualification: "Degree",
      description:
        "Roles and Responsibilities: -Good experience in Data Migration as well as SAP BODS as added advantage -Data Migration from legacy SAP systems ( ECC ) to SAP S4 Hana -Data Migration from legacy Siebel systems to SAP S4 Hana -Data Migration from legacy Oracle data warehouse systems to SAP S4 Hana -Should be able to write and develop data validation reports for business and technical validations. effective communication with business users and should be able to run ad hoc data queries based on the business needs. Tools and Experience: -Experience in using global parameters and substitution variables -Experience in working and using Conditional data flows -Experience in setting up data stores -Experience in develop and create file formats for exports and imports -Experience in loading data via Idocs and BAPI's calls from SAP BODS -Experience in developing and loading data with LSMW and Migration -Working knowledge of Power BI.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phoneNumber: "",
    experience: "",
    address:"",
    salary: "",
    annualCtc:"",
    expectedSalary:"",
    coverLetter: "",
    uploadResume: "",
    noticePeriod: ""

  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  const saveForm = async () => {
    try {
      await axios.post(
        "http://localhost:8080/careerpageform/create/careerpageform",
        formData
      );
      alert("Thank You!");
      console.log("Form added successfully");
    } catch (error) {
      console.error("Error saving form", error);
    }
  };

  const handleSubmit = () => {
    saveForm();
  };

  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div>
      <div className="apply">
        <div className="career-h" style={{ paddingTop: "170px" }}>
          <h1 className="fw-bold">Careers</h1>
          <div className="home-about-dot-c">
            <p>Home</p>
            <img src={Dotted} height={6} className="mt-2 mx-2" alt="" />
            <p style={{ color: "#f76c24" }}>Careers</p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between apply-top">
          <div className="top-left-part">
            <p className="fs-2 fw-bold mb-4">{jobData[getCard].role}</p>
            <div style={{ fontWeight: "600", wordSpacing: "10px" }}>
              {jobData[getCard].city}
              <span
                className="mx-3"
                style={{ color: "rgba(204, 204, 204, 0.80)" }}
              >
                |
              </span>
              JOB NO. {jobData[getCard].jobNo}
              <span
                className="mx-3"
                style={{ color: "rgba(204, 204, 204, 0.80)" }}
              >
                |
              </span>
              {jobData[getCard].designation}
            </div>
            <div className="buttons-buttonn mt-4" style={{ fontWeight: "600" }}>
              <button
                className="apply-btn-career"
                onClick={() => setModalOpen(true)}
              >
                APPLY
              </button>
              <div className="mx-4">
                <FaRegBookmark /> SAVE JOB
              </div>
              <div>
                <img height={20} src={Share} alt="" /> SHARE
              </div>
              <div className="mx-4">
                <img height={20} src={Info} alt="" /> REGISTER FOR JOB ALERTS
              </div>
            </div>
          </div>
          <div className="top-right-part">
            <img src={orive_logo} height={250} alt="" />
          </div>
        </div>
        <div className="apply-mid">
          <div className="apply-mid-left">
            <p className="fs-2 fw-bold">Job Description</p>
            <div
              style={{ color: "rgba(119, 120, 136, 1)", fontSize: "0.9rem" }}
            >
              <p>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Project Role:{" "}
                </span>{" "}
                {jobData[getCard].projectRole}{" "}
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Project Role Description:{" "}
                </span>{" "}
                {jobData[getCard].projectRoleDesc}
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Must have skills:{" "}
                </span>
                {jobData[getCard].mustHaveSkills}
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Good to have skills:
                </span>{" "}
                {jobData[getCard].goodHaveSkills}{" "}
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Educational Qualification:{" "}
                </span>
                {jobData[getCard].qualification}{" "}
              </p>
              <p>{jobData[getCard].description}</p>
            </div>
          </div>
          <div className="apply-mid-right">
            <p className="fs-2 fw-bold">More Jobs</p>
            <div className="latest-jobs-cards-card">
              <div className="border-top"></div>
              <div className="card-below-border">
                <div className="city-country d-flex align-items-center justify-content-between">
                  <div style={{ fontWeight: "600", wordSpacing: "10px" }}>
                    INDIA
                    <span
                      className="mx-3"
                      style={{ color: "rgba(204, 204, 204, 0.80)" }}
                    >
                      |
                    </span>
                    BHUBANESWAR
                  </div>
                  <div
                    style={{ textAlign: "center", color: "#777888" }}
                    className="mt-2"
                  >
                    <FaRegBookmark style={{ cursor: "pointer" }} />
                    <p style={{ marginTop: "-3px", fontSize: "0.8rem" }}>
                      Save
                    </p>
                  </div>
                </div>
                <div
                  className="card-heading-job fs-3 fw-bold"
                  style={{ lineHeight: "35px" }}
                >
                  UI/UX Designer
                </div>
                <div
                  className="card-sub-heading-job fs-6 my-3"
                  style={{ lineHeight: "20px" }}
                >
                  <span style={{ fontWeight: "600", textDecoration: "none" }}>
                    Software Engineer
                  </span>
                  <span
                    style={{
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    - Project Role : UI/UX Designer
                  </span>
                </div>
                <div
                  className="posted-ago mb-3"
                  style={{
                    textAlign: "end",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#2F3045",
                  }}
                >
                  Posted 1 day ago
                </div>
              </div>
            </div>
            <div className="latest-jobs-cards-card mt-2">
              <div className="border-top"></div>
              <div className="card-below-border">
                <div className="city-country d-flex align-items-center justify-content-between">
                  <div style={{ fontWeight: "600", wordSpacing: "10px" }}>
                    INDIA
                    <span
                      className="mx-3"
                      style={{ color: "rgba(204, 204, 204, 0.80)" }}
                    >
                      |
                    </span>
                    BHUBANESWAR
                  </div>
                  <div
                    style={{ textAlign: "center", color: "#777888" }}
                    className="mt-2"
                  >
                    <FaRegBookmark style={{ cursor: "pointer" }} />
                    <p style={{ marginTop: "-3px", fontSize: "0.8rem" }}>
                      Save
                    </p>
                  </div>
                </div>
                <div
                  className="card-heading-job fs-3 fw-bold"
                  style={{ lineHeight: "35px" }}
                >
                  UI/UX Designer
                </div>
                <div
                  className="card-sub-heading-job fs-6 my-3"
                  style={{ lineHeight: "20px" }}
                >
                  <span style={{ fontWeight: "600", textDecoration: "none" }}>
                    Software Engineer
                  </span>
                  <span
                    style={{
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    - Project Role : UI/UX Designer
                  </span>
                </div>
                <div
                  className="posted-ago mb-3"
                  style={{
                    textAlign: "end",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: "#2F3045",
                  }}
                >
                  Modal Posted 1 day ago
                </div>
              </div>
            </div>
            <div
              className="mt-1"
              style={{
                color: "grey",
                fontSize: "0.9rem",
                textAlign: "end",
                cursor: "pointer",
              }}
            >
              <Link
                to={"/career"}
                style={{ textDecoration: "none", color: "grey" }}
              >
                View More{" "}
                <img
                  style={{ opacity: "0.7" }}
                  src={arrow}
                  height={16}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {modalOpen ? (
        <div id="modal-container">
          <div className="pura-form-c">
            <div className="form-modal-c">
              <h2
                className="fw-bold close-aply mx-4 mt-3"
                onClick={() => setModalOpen(false)}
              >
                X
              </h2>
              <h3 className="fw-bold reach-us-head-c">Job Application Form</h3>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 name-wa-c">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control-c mx-3"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control-c mx-3"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>

                <div className="mb-3 name-wa-c">
                  <label className="form-label">Phone No:</label>
                  <input
                    type="number"
                    className="form-control-c mx-3"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label">Preffered Location:</label>
                  <input
                    type="text"
                    className="form-control-c mx-3"
                    placeholder="Location"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label">Address:</label>
                  <input
                    type="text"
                    className="form-control-c mx-3"
                    placeholder="Address"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label">Salary:</label>
                  <div className="In-p">
                    {" "}
                    <input
                      type="text"
                      className="form-control-c mx-3"
                      placeholder="Your Annual CTC"
                      name="annualCtc"
                      id="annualCtc"
                      value={formData.annualCtc}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control-c mx-3"
                      placeholder="Your Expected Salary"
                      name="expectedSalary"
                      id="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={(e) => handleInputChange(e)}
                      required
                    />{" "}
                  </div>
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label Upload">Upload Resume:</label>
                  <input
                    type="file"
                    className="form-control-c mx-3"
                    placeholder="Notice Period if Any"
                    name="uploadResume"
                    id="uploadResume"
                    value={formData.uploadResume}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />{" "}
                </div>
                <div className="mb-3 name-wa-c">
                  <label className="form-label">Notice Period:</label>
                  <input
                    type="text"
                    className="form-control-c mx-3"
                    placeholder="Notice Period if Any"
                    name="noticePeriod"
                    id="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={(e) => handleInputChange(e)}
                    required
                  />
                </div>
                <button
                  className="submit-btn-ru-c"
                  onClick={
                  handleConfirmClick
                }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Career;
