import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../loader/loader";
import Nav from "../components/common/nav/nav";
import { useMediaQuery } from "react-responsive";
import FormControl from "@material-ui/core/FormControl";
import Label from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import firebase from "../config/fbConfig";
import Alert from "@material-ui/lab/Alert";

const RegisterTeacher = ({ profile, uid }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    firstCourseTitle: "",
    firstCourseName: "",
    firstCourseLink: "",
    loading: false,
  });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   Getting value from first course title
  const handleFirstCourseTitle = (event) => {
    setFormData({
      ...formData,
      firstCourseTitle: event.target.value,
      firstCourseName: "",
      firstCourseLink: "",
    });
  };

  //   Getting value from first course name
  const handleFirstCourseName = ({ target }) => {
    const { value } = target;

    if (value === "Microsoft Front End Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/frontEndLMS",
        firstCourseName: value,
      });
    } else if (value === "Data Science") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/dataScienceLMS",
        firstCourseName: value,
      });
    } else if (value === "ASP.NET Web Applications") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/aspDotNetLMS",
        firstCourseName: value,
      });
    } else if (value === "PHP Laravel") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/phpLaravelLMS",
        firstCourseName: value,
      });
    } else if (value === "MERN Stack") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/mernStackLMS",
        firstCourseName: value,
      });
    } else if (value === "SQL Server Specialist") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/sqlServerSpecialistLMS",
        firstCourseName: value,
      });
    } else if (value === "Oracle Database Administrator (OCP : 12C DBA)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/oracleDatabaseLMS",
        firstCourseName: value,
      });
    } else if (value === "Android Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/androidAppLMS",
        firstCourseName: value,
      });
    } else if (value === "IOS Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/iosAppLMS",
        firstCourseName: value,
      });
    } else if (value === "Xamarin Mobile Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/xamarinAppLMS",
        firstCourseName: value,
      });
    } else if (value === "React Native Web & Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/reactNativeLMS",
        firstCourseName: value,
      });
    } else if (value === "Game Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/gameDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "Cisco CCNA Networking") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/ccnaNetworkingLMS",
        firstCourseName: value,
      });
    } else if (value === "Graphics Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/graphicDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "Video Editing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/videoEditingLMS",
        firstCourseName: value,
      });
    } else if (value === "Search Engine Optimization (SEO)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/seoLMS",
        firstCourseName: value,
      });
    } else if (value === "Social Media Marketing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/socialMediaLMS",
        firstCourseName: value,
      });
    } else if (value === "Amazon FBA Business") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/amazonFbaBusinessLMS",
        firstCourseName: value,
      });
    } else if (value === "Project Management Professional (PMP)") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/projectManagementProfessionalLMS",
        firstCourseName: value,
      });
    } else if (value === "Digital Forensic Cyber Security") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/digitalForensicCyberSecurityLMS",
        firstCourseName: value,
      });
    } else if (value === "Penetration Testing Cyber Security") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingCyberSecurityLMS",
        firstCourseName: value,
      });
    } else if (value === "Artificial Intelligence") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/artificialIntelligenceLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Cloud Computing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/cloudComputingLMS",
        firstCourseName: value,
      });
    } else if (value === "Full Stack Web Development") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/fullStackWebDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "Internet of Things (IoT)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/iotLMS",
        firstCourseName: value,
      });
    } else if (value === "BlockChain Technology") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/blockChainLMS",
        firstCourseName: value,
      });
    } else if (value === "CompTIA It Fundamentals") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/comptiaItFundamentalsLMS",
        firstCourseName: value,
      });
    } else if (value === "Kotlin Mobile Apps Development") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/kotlinMobileAppsDevelopmentLMS",
        firstCourseName: value,
      });
    } else if (value === "CompTIA Security + (SYO - 601)") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/comptiaSecurityPlusLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Ethical Hacking") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/certifiedEthicalHackingLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Hacking Forensic Investigator") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedHackingForensicInvestigatorLMS",
        firstCourseName: value,
      });
    } else if (value === "Penetration Testing Security Analyst") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/penetrationTestingSecurityAnalystLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Information System Auditor") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSystemAuditorLMS",
        firstCourseName: value,
      });
    } else if (value === "Certified Information Security Manager") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/certifiedInformationSecurityManagerLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Practitioner") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsPractitionerLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Solution Architect") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsSolutionArchitectLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS SysOps Administrator") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsSysOpsAdministratorLMS",
        firstCourseName: value,
      });
    } else if (value === "AWS Developer Associate") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/awsDeveloperAssociateLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Azure Cloud Fundamentals") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/microsoftAzureCloudFundamentalsLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Cloud Administrator 103 - 104") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/microsoftCloudAdministratorLMS",
        firstCourseName: value,
      });
    } else if (value === "Google Cloud Engineer") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/googleCloudEngineerLMS",
        firstCourseName: value,
      });
    } else if (value === "Python For Everyone") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/pythonForEveryoneLMS",
        firstCourseName: value,
      });
    } else if (value === "Machine Learning & AI") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/machineLearningAndAILMS",
        firstCourseName: value,
      });
    } else if (value === "Big Data & Headoop Ecosystem") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/bigDataAndHeadoopEcosystemLMS",
        firstCourseName: value,
      });
    } else if (value === "QuickBooks ERP") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/quickBooksERPLMS",
        firstCourseName: value,
      });
    } else if (value === "SAP ERP") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/sapERPLMS",
        firstCourseName: value,
      });
    } else if (value === "Digital Marketing") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/digitalMarketingLMS",
        firstCourseName: value,
      });
    } else if (value === "UI / UX Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/uiUXDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "Interior Design") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/interiorDesignLMS",
        firstCourseName: value,
      });
    } else if (value === "3D Maya Max Animation") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/3dMayaMaxAnimationLMS",
        firstCourseName: value,
      });
    } else if (value === "AutoCad") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/autocadLMS",
        firstCourseName: value,
      });
    } else if (value === "Microsoft Office 365") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/microsoftOffice365LMS",
        firstCourseName: value,
      });
    } else if (value === "Enterpreneurship") {
      setFormData({
        ...formData,
        firstCourseLink: "/lmsDashboard/myCourses/enterpreneurshipLMS",
        firstCourseName: value,
      });
    } else if (value === "CISSP Cyber Security Professional") {
      setFormData({
        ...formData,
        firstCourseLink:
          "/lmsDashboard/myCourses/cisspCyberSecurityProfessionalLMS",
        firstCourseName: value,
      });
    }
  };

  const validate = () => {
    const errors = {};

    // RegEx
    const name = /^[A-Za-z ]+$/;
    const emailAddress = /^[\w_.-]+@([\w-]+\.)+\w{2,4}$/;

    if (formData.name.trim() === "") {
      errors.name = "Name mustn't be empty";
    } else if (!name.test(formData.name)) {
      errors.name = "Invalid Name";
    }

    if (formData.email.trim() === "") {
      errors.email = "Email address mustn't be empty";
    } else if (!emailAddress.test(formData.email)) {
      errors.email = "Invalid Email Address";
    }

    if (formData.password.trim() === "") {
      errors.password = "Password mustn't be empty";
    }

    if (formData.firstCourseTitle === "") {
      errors.firstCourseTitle = "First course mustn't be empty";
    }

    if (formData.firstCourseTitle !== "") {
      if (formData.firstCourseName === "") {
        errors.firstCourseName = "First course category mustn't be empty";
      }
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    setFormData({
      loading: true,
    });

    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .doc(res.user.uid)
          .set({
            name: formData.name,
            email: formData.email,
            firstCourseName: formData.firstCourseName,
            firstCourseTitle: formData.firstCourseTitle,
            firstCourseLink: formData.firstCourseLink,
            teacher: true,
          })
          .then(() => {
            setMsg("Successfully Registered");
            setFormData({
              name: "",
              email: "",
              password: "",
              firstCourseTitle: "",
              firstCourseName: "",
              firstCourseLink: "",
              loading: false,
            });
          });
      })
      .catch((err) => {
        setMsg(err.message);
        setFormData({
          ...formData,
          loading: false,
        });
      });
  };

  // Checking LMS Status
  if (!profile.lms && !profile.admin) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  return profile ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop ? 50 : 390 }}
      >
        <h1 className="fw-bold text-uppercase">Register Teacher</h1>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
          height: isLaptop ? "auto" : 700,
        }}
      >
        <div
          className="container d-flex flex-lg-row flex-column profile py-5"
          style={{
            position: "relative",
            left: isLaptop ? 0 : 150,
            width: isLaptop ? "100%" : "71vw",
          }}
        >
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label for="emailAddress" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={handleChange}
                value={formData.email}
                name="email"
                id="emailAddress"
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={handleChange}
                value={formData.password}
                name="password"
                id="password"
                placeholder="123www!"
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
            </div>
            <FormControl fullWidth variant="standard">
              <Label htmlFor="firstCourse">First Course *</Label>
              <Select
                id="firstCourse"
                name="firstCourseTitle"
                value={formData.firstCourseTitle}
                onChange={handleFirstCourseTitle}
              >
                <MenuItem value="Fast Track Technical Program">
                  Fast Track Technical Program
                </MenuItem>
                <MenuItem value="Fast Track Non-Technical Program">
                  Fast Track Non-Technical Program
                </MenuItem>
                <MenuItem value="Associate Certification Program">
                  Associate Certification Program
                </MenuItem>
              </Select>
              {errors.firstCourseTitle && (
                <p className="text-danger">{errors.firstCourseTitle}</p>
              )}
            </FormControl>
            {formData.firstCourseTitle === "Fast Track Technical Program" && (
              <FormControl fullWidth className="mt-3" variant="standard">
                <Label id="firstCourseCategory">First Course Category</Label>
                <Select
                  value={formData.firstCourseName}
                  id="firstCourseCategory"
                  name="firstCourseName"
                  onChange={handleFirstCourseName}
                >
                  <MenuItem value="CompTIA It Fundamentals">
                    CompTIA It Fundamentals
                  </MenuItem>
                  <MenuItem value="Microsoft Front End Development">
                    Microsoft Front End Development
                  </MenuItem>
                  <MenuItem value="ASP.NET Web Applications">
                    ASP.NET Web Applications
                  </MenuItem>
                  <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
                  <MenuItem value="MERN Stack">MERN Stack</MenuItem>
                  <MenuItem value="SQL Server Specialist">
                    SQL Server Specialist
                  </MenuItem>
                  <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
                    Oracle Database Administrator (OCP : 12C DBA)
                  </MenuItem>
                  <MenuItem value="Android Apps Development">
                    Android Apps Development
                  </MenuItem>
                  <MenuItem value="Kotlin Mobile Apps Development">
                    Kotlin Mobile Apps Development
                  </MenuItem>
                  <MenuItem value="IOS Apps Development">
                    IOS Apps Development
                  </MenuItem>
                  <MenuItem value="Xamarin Mobile Apps Development">
                    Xamarin Mobile Apps Development
                  </MenuItem>
                  <MenuItem value="React Native Web &amp; Apps Development">
                    React Native Web &amp; Apps Development
                  </MenuItem>
                  <MenuItem value="Game Development">Game Development</MenuItem>
                  <MenuItem value="Cisco CCNA Networking">
                    Cisco CCNA Networking
                  </MenuItem>
                  <MenuItem value="CompTIA Security + (SYO - 601)">
                    CompTIA Security + (SYO - 601)
                  </MenuItem>
                  <MenuItem value="Certified Ethical Hacking">
                    Certified Ethical Hacking
                  </MenuItem>
                  <MenuItem value="Certified Hacking Forensic Investigator">
                    Certified Hacking Forensic Investigator
                  </MenuItem>
                  <MenuItem value="Penetration Testing Security Analyst">
                    Penetration Testing Security Analyst
                  </MenuItem>
                  <MenuItem value="Certified Information System Auditor">
                    Certified Information System Auditor
                  </MenuItem>
                  <MenuItem value="Certified Information Security Manager">
                    Certified Information Security Manager
                  </MenuItem>
                  <MenuItem value="AWS Practitioner">AWS Practitioner</MenuItem>
                  <MenuItem value="AWS Solution Architect">
                    AWS Solution Architect
                  </MenuItem>
                  <MenuItem value="AWS SysOps Administrator">
                    AWS SysOps Administrator
                  </MenuItem>
                  <MenuItem value="AWS Developer Associate">
                    AWS Developer Associate
                  </MenuItem>
                  <MenuItem value="Microsoft Azure Cloud Fundamentals">
                    Microsoft Azure Cloud Fundamentals
                  </MenuItem>
                  <MenuItem value="Microsoft Cloud Administrator 103 - 104">
                    Microsoft Cloud Administrator 103 - 104
                  </MenuItem>
                  <MenuItem value="Google Cloud Engineer">
                    Google Cloud Engineer
                  </MenuItem>
                  <MenuItem value="Python For Everyone">
                    Python for Everyone
                  </MenuItem>
                  <MenuItem value="Machine Learning &amp; AI">
                    Machine Learning &amp; AI
                  </MenuItem>
                  <MenuItem value="Data Science">Data Science</MenuItem>
                  <MenuItem value="Big Data &amp; Headoop Ecosystem">
                    Big Data &amp; Headoop Ecosystem
                  </MenuItem>
                </Select>
              </FormControl>
            )}

            {formData.firstCourseTitle ===
              "Fast Track Non-Technical Program" && (
              <FormControl fullWidth className="mt-3" variant="standard">
                <Label id="firstCourseCategory">First Course Category</Label>
                <Select
                  id="firstCourseCategory"
                  name="firstCourseName"
                  value={formData.firstCourseName}
                  onChange={handleFirstCourseName}
                >
                  <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
                  <MenuItem value="SAP ERP">SAP ERP</MenuItem>
                  <MenuItem value="Project Management Professional (PMP)">
                    Project Management Professional (PMP)
                  </MenuItem>
                  <MenuItem value="Amazon FBA Business">
                    Amazon FBA Business
                  </MenuItem>
                  <MenuItem value="Search Engine Optimization (SEO)">
                    Search Engine Optimization (SEO)
                  </MenuItem>
                  <MenuItem value="Digital Marketing">
                    Digital Marketing
                  </MenuItem>
                  <MenuItem value="Social Media Marketing">
                    Social Media Marketing
                  </MenuItem>
                  <MenuItem value="Graphics Design">Graphic Design</MenuItem>
                  <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
                  <MenuItem value="Interior Design">Interior Design</MenuItem>
                  <MenuItem value="3D Maya Max Animation">
                    3D Maya Max Animation
                  </MenuItem>
                  <MenuItem value="Video Editing">Video Editing</MenuItem>
                  <MenuItem value="AutoCad">AutoCad</MenuItem>
                  <MenuItem value="Microsoft Office 365">
                    Microsoft Office 365
                  </MenuItem>
                  <MenuItem value="Enterpreneurship">Enterpreneurship</MenuItem>
                </Select>
              </FormControl>
            )}

            {formData.firstCourseTitle ===
              "Associate Certification Program" && (
              <FormControl fullWidth className="mt-3" variant="standard">
                <Label htmlFor="firstCourseCategory">
                  First Course Category
                </Label>
                <Select
                  id="firstCourseCategory"
                  name="firstCourseName"
                  value={formData.firstCourseName}
                  onChange={handleFirstCourseName}
                >
                  <MenuItem value="Digital Forensic Cyber Security">
                    Digital Forensic Cyber Security
                  </MenuItem>
                  <MenuItem value="Penetration Testing Cyber Security">
                    Penetration Testing Cyber Security
                  </MenuItem>
                  <MenuItem value="CISSP Cyber Security Professional">
                    CISSP Cyber Security Professional
                  </MenuItem>
                  <MenuItem value="Artificial Intelligence">
                    Artificial Intelligence
                  </MenuItem>
                  <MenuItem value="AWS Cloud Computing">
                    AWS Cloud Computing
                  </MenuItem>
                  <MenuItem value="Internet of Things (IoT)">
                    Internet of Things (IoT)
                  </MenuItem>
                  <MenuItem value="BlockChain Technology">
                    BlockChain Technology
                  </MenuItem>
                  <MenuItem value="Full Stack Web Development">
                    Full Stack Web Development (MCSA)
                  </MenuItem>
                </Select>
              </FormControl>
            )}
            {errors.firstCourseName && (
              <p className="text-danger">{errors.firstCourseName}</p>
            )}

            {msg && (
              <Alert severity="info" className="mt-3" variant="outlined">
                {msg}
              </Alert>
            )}

            <button
              type="submit"
              disabled={formData.loading}
              className="btn btn-primary mt-3"
            >
              {formData.loading ? (
                <>
                  <div className="d-flex align-items-center">
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    &nbsp; Registering...
                  </div>
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(RegisterTeacher);
