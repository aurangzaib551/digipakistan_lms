import React from "react";
import Nav from "../components/common/nav/nav";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Loader from "../loader/loader";
import Alert from "@material-ui/lab/Alert";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";

const Dashboard = ({ profile, uid }) => {
  // Object Destructuring
  const { push } = useHistory();

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
      <div className="container dashboard">
        <Alert severity="info" variant="filled" className="mt-4">
          For questions, please contact us at the DigiPAKISTAN helpline:
          042-35974881 / 042-35974882 between 10 AM - 5 PM. Please note we are
          closed on Saturday &amp; Sunday.
        </Alert>

        <div className="d-flex flex-wrap justify-content-center">
          <ButtonBase onClick={() => go("/lectures")} className="mt-4">
            <Paper className="border box p-3 fw-light">
              {profile.course.length}{" "}
              <span className="fw-bold">
                Enrolled Course{profile.course.length > 1 ? "s" : null}
              </span>
            </Paper>
          </ButtonBase>

          <ButtonBase onClick={() => go("/lectures")} className="mt-4 ms-3">
            <Paper className="border box p-3 fw-light">
              {activeCourses.length}{" "}
              <span className="fw-bold">
                Active Course{activeCourses.length > 1 ? "s" : null}
              </span>
            </Paper>
          </ButtonBase>
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
