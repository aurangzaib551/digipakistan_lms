import React from "react";
import Nav from "../components/common/nav/nav";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "react-responsive";
import Enrolled from "../assets/icons/enrolled.jpg";
import Active from "../assets/icons/active.jpg";

const Dashboard = ({ profile, uid }) => {
  // Object Destructuring
  const { push } = useHistory();
  const isLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  // Checking LMS Status
  if (!profile.lms) return <Redirect to="/info" />;
  // Checking user is logged in or not
  if (!uid) return <Redirect to="/" />;

  let activeCourses = [];

  if (profile.course[0]) {
    if (profile.course[0]["First Course Name"].status) {
      activeCourses.push(profile.course[0]["First Course Name"]);
    }
  }

  if (profile.course[1]) {
    if (profile.course[1]["Second Course Name"].status) {
      activeCourses.push(profile.course[0]["Second Course Name"]);
    }
  }

  if (profile.course[2]) {
    if (profile.course[2]["Third Course Name"].status) {
      activeCourses.push(profile.course[0]["Third Course Name"]);
    }
  }

  //   Go to next page
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 300);
  };

  return profile.fullName ? (
    <>
      <Nav />
      <div
        className="bg-white mt-3 mt-lms"
        style={{ marginLeft: isLaptop ? 50 : 390 }}
      >
        <h1 className="fw-bold text-uppercase">Courses</h1>
      </div>
      <div
        style={{
          backgroundColor: "#eee",
        }}
      >
        <div
          className="container dashboard"
          style={{
            backgroundColor: "#eee",
            paddingBottom: 90,
            position: "relative",
            left: isLaptop ? 0 : 150,
            width: isLaptop ? "100%" : "71vw",
          }}
        >
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
            <Paper className="border p-3 mt-4 text-danger text-center small">
              <span className="fw-bold">Covid19</span>, “Corona is not a
              life-threatening virus if we promise to maintain social distance,
              maintain hygiene and follow what our government is asking us to
              follow. Remember, we have to fight the virus together and hope for
              a happier and healthier life ahead.”
            </Paper>
            <ButtonBase onClick={() => go("/lectures")} className="mt-4">
              <Paper className="border box flex-column d-flex p-3 fw-light">
                <img src={Enrolled} alt="Enrolled Courses" height="250" />
                <div>
                  <span className="fw-bold d-flex">
                    Enrolled Course{profile.course.length > 1 ? "s" : null} (
                    {profile.course.length})
                  </span>
                  <div className="d-flex flex-column align-items-start">
                    <p className="h6">Here are all courses list</p>
                    <p className="h6 mb-0 mt-4">
                      Students &nbsp;&nbsp; - &nbsp;&nbsp; --
                    </p>
                  </div>
                </div>
              </Paper>
            </ButtonBase>

            <ButtonBase onClick={() => go("/lectures")} className="mt-4 ms-3">
              <Paper className="border box p-3 fw-light d-flex flex-column">
                <img src={Active} alt="Enrolled Courses" height="250" />
                <div className="d-flex flex-column align-items-start">
                  <div className="d-flex">
                    <span className="fw-bold">
                      Active Course{activeCourses.length > 1 ? "s" : null} (
                      {activeCourses.length})
                    </span>
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <p className="h6">Here are all courses list</p>
                    <p className="h6 mb-0 mt-4">
                      Students &nbsp;&nbsp; - &nbsp;&nbsp; --
                    </p>
                  </div>
                </div>
              </Paper>
            </ButtonBase>
          </div>
          <Paper className="border p-3 mt-4 text-primary fw-bold text-center small">
            For questions, please contact us at the DigiPAKISTAN helpline:
            042-35974881 / 042-35974882 between 10 AM - 5 PM. Please note we are
            closed on Saturday &amp; Sunday.
          </Paper>
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

export default connect(mapStateToProps)(Dashboard);
